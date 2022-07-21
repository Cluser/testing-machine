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
        self.blowings = self.db["blowings"]
        self.blowings_results = self.db["blowings_results"]

        # Variables
        self.selected_spindle_id = ["","",""]
        self.OK = True
        self.NOK = False

        # Stop last grinding after program init
        self.stop_grinding(0, self.NOK)
        self.stop_grinding(1, self.NOK)
        self.stop_grinding(2, self.NOK)

        # Stop last blowing after program init
        self.stop_blowing(0, self.NOK)
        self.stop_blowing(1, self.NOK)
        self.stop_blowing(2, self.NOK)
        

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
                    "stopTime": "",
                    "resultOk": False
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


    def stop_grinding(self, module, result):
        self.grindings.update_one(
            {
                "_id": self.get_last_grinding_id(module)
            },
            {
                "$set": 
                { 
                    "stopTime": self.get_current_time(),
                    "resultOk": result
                }
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


    # Blowing
    def start_blowing(self, module: int):
        if not self.is_blowing_in_progress(module):

            self.blowings.insert_one(
                {
                    "spindle_id": self.selected_spindle_id[module],
                    "module": module,
                    "startTime": self.get_current_time(), 
                    "stopTime": "",
                    "resultOk": False
                }
            ).inserted_id

    def add_blowing_result(self, module):
        self.blowings.insert_one(
            {
                "blowing_id": self.get_last_blowing_id(module),
                'timestamp': self.get_current_time(),
            }
        ).inserted_id


    def stop_blowing(self, module, result):
        self.blowings.update_one(
            {
                "_id": self.get_last_blowing_id(module)
            },
            {
                "$set": 
                { 
                    "stopTime": self.get_current_time(),
                    "resultOk": result
                }
            }
        )

    def get_last_blowing_id(self, module):
        lastBlowing =  list(self.blowings.find({"module": module}).sort([('_id', -1)]).limit(1))

        blowingExist = len(lastBlowing) > 0
        
        if blowingExist:
            return lastBlowing[0]["_id"]
        else:
            return None 

        
    def is_blowing_in_progress(self, module):
        lastBlowing =  list(self.blowings.find({"module": module}).sort([('_id', -1)]).limit(1))

        blowingExist = len(lastBlowing) > 0

        if blowingExist and lastBlowing[0]["stopTime"] == "":
            return True
        else:
            return False 


test2 = test2()