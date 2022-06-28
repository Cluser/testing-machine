from typing import List
from pydantic import BaseModel

class Process(BaseModel):
    id: int
    alarm: List[bool]
    status: int
    spindle_no: int
    time_left: int
    spindle_velocity: int
    motor_velocity: int
    motor_temperature: int
    outside_temperature: int
    allow_recipe_change: bool

class Module(BaseModel):
    id: int
    process: List[Process]

class Station(BaseModel):
    lifebit: bool
    alarm: List[bool]
    timestamp: int
    module: List[Module]


station = Station(
    lifebit = True,
    alarm = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False],
    timestamp = 0,
    module = [
        Module(
            id = 1,
            process = [
                Process(
                    id = 1,
                    alarm = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False],
                    status = 5,
                    spindle_no = 1000,
                    time_left = 500,
                    spindle_velocity = 100,
                    motor_velocity = 100,
                    motor_temperature = 20,
                    outside_temperature = 30,
                    allow_recipe_change = False
                )
            ]
        ),
        Module(
            id = 2,
            process = [
                Process(
                    id = 1,
                    alarm = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False],
                    status = 5,
                    spindle_no = 1000,
                    time_left = 500,
                    spindle_velocity = 100,
                    motor_velocity = 100,
                    motor_temperature = 20,
                    outside_temperature = 30,
                    allow_recipe_change = False
                )
            ]
        ),
        Module(
            id = 3,
            process = [
                Process(
                    id = 1,
                    alarm = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False],
                    status = 5,
                    spindle_no = 1000,
                    time_left = 500,
                    spindle_velocity = 100,
                    motor_velocity = 100,
                    motor_temperature = 20,
                    outside_temperature = 30,
                    allow_recipe_change = False
                )
            ]
        )
    ]
)

