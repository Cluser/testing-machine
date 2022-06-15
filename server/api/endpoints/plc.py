import asyncio
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from plc import data
from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from db import general as db
from db.general import serializeList, serializeDict
from db.models.plc import SetRecipeParams
from bson import ObjectId

import snap7


router = APIRouter()
client = snap7.client.Client()
client.connect("192.168.0.1", 0, 0)

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            await websocket.send_json(data.station.dict())
            await asyncio.sleep(0.05)
    except WebSocketDisconnect:
        websocket.remove(websocket)

       

@router.post("/plc", tags=["Plc"])
async def set_recipe(params: SetRecipeParams):
    recipe = serializeList(db.client.recipes.find({"_id": ObjectId(params.recipeId)}))
    
    moduleOffset = params.moduleId * 226
    stepsListSize = len(recipe[0]["steps"])

    data = client.db_read(99, 0, 520)
    snap7.util.set_string(data, 0 + moduleOffset, recipe[0]["_id"], 30)
    snap7.util.set_string(data, 32 + moduleOffset, recipe[0]["name"], 30)
    snap7.util.set_int(data, 64 + moduleOffset, recipe[0]["temperatureLimit"])

    for idx, stepNo in enumerate(recipe[0]["steps"]):
        stepOffset = idx * 8
        snap7.util.set_int(data, 66 + moduleOffset + stepOffset, stepNo["velocity"])
        snap7.util.set_int(data, 68 + moduleOffset + stepOffset, stepNo["time"])
        snap7.util.set_int(data, 70 + moduleOffset + stepOffset, stepNo["oilFogTon"])
        snap7.util.set_int(data, 72 + moduleOffset + stepOffset, stepNo["oilFogTof"])

    for idx in range(stepsListSize, 20):
        stepOffset = idx * 8
        snap7.util.set_int(data, 66 + moduleOffset + stepOffset, 0)
        snap7.util.set_int(data, 68 + moduleOffset + stepOffset, 0)
        snap7.util.set_int(data, 70 + moduleOffset + stepOffset, 0)
        snap7.util.set_int(data, 72 + moduleOffset + stepOffset, 0)

    client.db_write(99, 0, data)

    return recipe