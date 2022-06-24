from pydantic import BaseModel
from typing import List

class SetRecipeParams(BaseModel):
    moduleId: int
    recipeId: str

class ConfirmPlateChangeParams(BaseModel):
    moduleId: int

class StartGrindingParams(BaseModel):
    moduleId: int

class StopGrindingParams(BaseModel):
    moduleId: int

class StartTestingParams(BaseModel):
    moduleId: int

class StopTestingParams(BaseModel):
    moduleId: int

class ResetParams(BaseModel):
    moduleId: int



def serializeDict(a) -> dict:
    return {**{i:str(a[i]) for i in a if i=='_id'},**{i:a[i] for i in a if i!='_id'}}

def serializeList(entity) -> list:
    return [serializeDict(a) for a in entity]