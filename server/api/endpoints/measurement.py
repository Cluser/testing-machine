import asyncio
from time import sleep
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from db import general as db
from plc import data


router = APIRouter()

@router.get("/Measurement", tags=["Measurement"])
async def get():
    # print(general.values.find_one({'int': 77}))
    return 5

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            await websocket.send_json(data.station.dict())
            await asyncio.sleep(0.1)
    except WebSocketDisconnect:
        websocket.remove(websocket)
        