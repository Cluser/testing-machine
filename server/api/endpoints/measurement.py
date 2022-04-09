from time import sleep
from fastapi import APIRouter, WebSocket
from db import general as db
from fastapi.responses import HTMLResponse


router = APIRouter()

@router.get("/Measurement", tags=["Measurement"])
async def get():
    # print(general.values.find_one({'int': 77}))
    return 5

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        await websocket.send_json({"message": "Some message"})
        sleep(0.1)