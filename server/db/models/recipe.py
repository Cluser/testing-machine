from pydantic import BaseModel
from typing import List

class Step(BaseModel):
    velocity: int
    time: int
    oilFogTon: int
    oilFogTog: int

class Recipe(BaseModel):
    name: str
    step: List[Step]



def serializeDict(a) -> dict:
    return {**{i:str(a[i]) for i in a if i=='_id'},**{i:a[i] for i in a if i!='_id'}}

def serializeList(entity) -> list:
    return [serializeDict(a) for a in entity]