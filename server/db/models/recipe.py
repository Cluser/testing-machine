from pydantic import BaseModel
from typing import List

class Step(BaseModel):
    velocity: int
    time: int
    oilFogTon: int
    oilFogTof: int

class Recipe(BaseModel):
    type: str
    idNumber: str
    version: str
    temperatureLimit: int
    steps: List[Step]