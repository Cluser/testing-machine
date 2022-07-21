from pymongo import MongoClient
from datetime import datetime

class test2:


    def __init__(self) -> None:
        # DB Configuration
        self.client = MongoClient('mongodb://localhost:27017/', maxPoolSize=50)
        self.db = self.client["snap7"]
        self.spindles = self.db["spindles"]
        self.grindings = self.db["grindings"]
        self.grindings_results = self.db["grindings_results"]

        # Variables
        self.selected_spindle_id = ["","",""]

        # Stop last grinding after program init
        self.stop_grinding(0)
        self.stop_grinding(1)
        self.stop_grinding(2)
        

    # Functions
    def select_spindle(self, module: int, spindle_no: str):
        result = self.spindles.find_one({ "spindle_no": spindle_no })
        
        if result: 
            self.selected_spindle_id[module] = result["_id"] 
        else: 
            self.add_new_spindle(spindle_no, module)

    def add_new_spindle(self, spindle_no: str, module: int):
        self.selected_spindle_id[module] = self.spindles.insert_one(
            {
                "spindle_no": spindle_no
            }
        ).inserted_id

    def start_grinding(self, module: int):
        if not self.is_grinding_in_progress(module):
            # self.stop_grinding()

            self.grindings.insert_one(
                {
                    "spindle_id": self.selected_spindle_id[module],
                    "module": module,
                    "startTime": self.get_current_time(), 
                    "stopTime": ""
                }
            ).inserted_id

    def add_grinding_result(self, module, spindle_velocity, motor_velocity, motor_temperature, outside_temperature):
        self.grindings_results.insert_one(
            {
                "grinding_id": self.get_last_grinding_id(module),
                'timestamp': self.get_current_time(),
                'spindle_velocity': spindle_velocity,
                'motor_velocity': motor_velocity,
                'motor_temperature': motor_temperature,
                'outside_temperature': outside_temperature
            }
        ).inserted_id


    def stop_grinding(self, module):
        self.grindings.update_one(
            {
                "_id": self.get_last_grinding_id(module)
            },
            {
                "$set": { "stopTime": self.get_current_time() }
            }
        )

    def get_last_grinding_id(self, module):
        lastGrinding =  list(self.grindings.find({"module": module}).sort([('_id', -1)]).limit(1))

        grindingExist = len(lastGrinding) > 0
        
        if grindingExist:
            return lastGrinding[0]["_id"]
        else:
            return None 

        
    def is_grinding_in_progress(self, module):
        lastGrinding =  list(self.grindings.find({"module": module}).sort([('_id', -1)]).limit(1))

        grindingExist = len(lastGrinding) > 0

        if grindingExist and lastGrinding[0]["stopTime"] == "":
            return True
        else:
            return False 

    def get_current_time(self):
        date_time_format = "%Y-%m-%d %H:%M:%S"
        return datetime.now().strftime(date_time_format)


test2 = test2()