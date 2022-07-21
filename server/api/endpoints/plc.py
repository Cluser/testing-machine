import asyncio
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from plc import data
from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from db import general as db
from db.general import serializeList, serializeDict
from db.models.plc import *
from bson import ObjectId
import snap7


router = APIRouter()
client = snap7.client.Client()
client.connect("192.168.50.10", 0, 0)


@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            await websocket.send_json(data.station.dict())
            await asyncio.sleep(1)
    except WebSocketDisconnect:
        websocket.remove(websocket)

       

@router.post("/plc", tags=["Plc"])
async def set_recipe(params: SetRecipeParams):
    recipe = serializeList(db.client.recipes.find({"_id": ObjectId(params.recipeId)}))
    
    moduleOffset = params.moduleId * 291
    stepsListSize = len(recipe[0]["steps"])

    data = client.db_read(198, 0, 877)
    snap7.util.set_string(data, 2 + moduleOffset, recipe[0]["_id"], 30)
    snap7.util.set_string(data, 34 + moduleOffset, recipe[0]["type"], 30)
    snap7.util.set_string(data, 66 + moduleOffset, recipe[0]["idNumber"], 30)
    snap7.util.set_string(data, 98 + moduleOffset, recipe[0]["version"], 30)
    snap7.util.set_int(data, 130 + moduleOffset, recipe[0]["temperatureLimit"])

    for idx, stepNo in enumerate(recipe[0]["steps"]):
        stepOffset = idx * 8
        snap7.util.set_int(data, 132 + moduleOffset + stepOffset, stepNo["velocity"])
        snap7.util.set_int(data, 134 + moduleOffset + stepOffset, stepNo["time"])
        snap7.util.set_int(data, 136 + moduleOffset + stepOffset, stepNo["oilFogTon"])
        snap7.util.set_int(data, 138 + moduleOffset + stepOffset, stepNo["oilFogTof"])

    for idx in range(stepsListSize, 20):
        stepOffset = idx * 8
        snap7.util.set_int(data, 132 + moduleOffset + stepOffset, 0)
        snap7.util.set_int(data, 134 + moduleOffset + stepOffset, 0)
        snap7.util.set_int(data, 136 + moduleOffset + stepOffset, 0)
        snap7.util.set_int(data, 138 + moduleOffset + stepOffset, 0)

    client.db_write(198, 0, data)

    return recipe

@router.post("/confirmPlateChange", tags=["Plc"])
async def confirm_plate_change(params: ConfirmPlateChangeParams):
    moduleOffset = params.moduleId * 291

    data = client.db_read(198, 0, 877)
    snap7.util.set_bool(data, 292 + moduleOffset, 0, True)

    client.db_write(198, 0, data)

    return "Plate change confirmed"

@router.post("/startGrinding", tags=["Plc"])
async def start_grinding(params: StartGrindingParams):
    moduleOffset = params.moduleId * 291

    data = client.db_read(198, 0, 877)
    snap7.util.set_bool(data, 292 + moduleOffset, 1, True)

    client.db_write(198, 0, data)

    return "Grinding started"

@router.post("/stopGrinding", tags=["Plc"])
async def stop_grinding(params: StopGrindingParams):
    moduleOffset = params.moduleId * 291

    data = client.db_read(198, 0, 877)
    snap7.util.set_bool(data, 292 + moduleOffset, 2, True)

    client.db_write(198, 0, data)

    return "Grinding stopped"

@router.post("/startTesting", tags=["Plc"])
async def start_testing(params: StartTestingParams):
    moduleOffset = params.moduleId * 291

    data = client.db_read(198, 0, 877)
    snap7.util.set_bool(data, 292  + moduleOffset, 3, True)

    client.db_write(198, 0, data)

    return "Testing started"

@router.post("/stopTesting", tags=["Plc"])
async def stop_testing(params: StopTestingParams):
    moduleOffset = params.moduleId * 291

    data = client.db_read(198, 0, 877)
    snap7.util.set_bool(data, 292  + moduleOffset, 4, True)

    client.db_write(198, 0, data)

    return "Testing stopped"

@router.post("/reset", tags=["Plc"])
async def reset(params: ResetParams):
    moduleOffset = params.moduleId * 291

    data = client.db_read(198, 0, 877)
    snap7.util.set_bool(data, 292 + moduleOffset, 5, True)

    client.db_write(198, 0, data)

    return "Reset done"