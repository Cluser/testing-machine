from pydantic import BaseModel

class Measurement(BaseModel):
    id: int
    vibration: int

    class Config:
        orm_mode = True

class MeasurementCreate(BaseModel):
    bool: bool
    int: int 
    real: float

class MeasurementEdit(BaseModel):
    id: int
    bool: bool
    int: int 
    real: float