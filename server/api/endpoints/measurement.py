import asyncio
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from plc import data

router = APIRouter()

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            await websocket.send_json(data.station.dict())
            await asyncio.sleep(0.05)
    except WebSocketDisconnect:
        websocket.remove(websocket)
        