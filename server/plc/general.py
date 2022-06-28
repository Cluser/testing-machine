import snap7
import time
from db import general as db

from plc.data import station

class Plc():
    def __init__(self) -> None:
        self.client = snap7.client.Client()

    def connect(self) -> None:
        self.client.connect("192.168.0.1", 0, 0)

    def disconnect(self) -> None:
        self.client.disconnect()

    def check_connection(self) -> bool:
        return self.client.get_connected()

    def get_data(self):
        start = time.time()
        data = self.client.db_read(199, 0, 172)
        # db.values.insert_one(values)
        moduleDataSize = 54

        station.lifebit = snap7.util.get_bool(data, 0, 0)
        for x in range(8): station.alarm[x] = snap7.util.get_bool(data, 2, x) 
        for x in range(8): station.alarm[8+x] = snap7.util.get_bool(data, 3, x) 
        for x in range(4): station.alarm[16+x] = snap7.util.get_bool(data, 4, x) 
        station.timestamp = snap7.util.get_dword(data, 6)

        for idxModule in range(3):
            station.module[idxModule].id = snap7.util.get_int(data, 10 + idxModule * moduleDataSize)
            station.module[idxModule].process[0].id = snap7.util.get_int(data, 12 + idxModule * moduleDataSize)
            for x in range(8): station.module[idxModule].process[0].alarm[x] = snap7.util.get_bool(data, 14 + idxModule * moduleDataSize, x) 
            for x in range(8): station.module[idxModule].process[0].alarm[8+x] = snap7.util.get_bool(data, 15 + idxModule * moduleDataSize, x) 
            for x in range(4): station.module[idxModule].process[0].alarm[16+x] = snap7.util.get_bool(data, 16 + idxModule * moduleDataSize, x) 

            station.module[idxModule].process[0].status = snap7.util.get_int(data, 18 + idxModule * moduleDataSize)
            station.module[idxModule].process[0].spindle_no = snap7.util.get_string(data, 20 + idxModule * moduleDataSize, 30)
            station.module[idxModule].process[0].time_left = snap7.util.get_int(data, 52 + idxModule * moduleDataSize)
            station.module[idxModule].process[0].spindle_velocity = snap7.util.get_int(data, 54 + idxModule * moduleDataSize)
            station.module[idxModule].process[0].motor_velocity = snap7.util.get_int(data, 56 + idxModule * moduleDataSize)
            station.module[idxModule].process[0].motor_temperature = snap7.util.get_int(data, 58 + idxModule * moduleDataSize)
            station.module[idxModule].process[0].outside_temperature = snap7.util.get_int(data, 60 + idxModule * moduleDataSize)
            station.module[idxModule].process[0].allow_recipe_change = snap7.util.get_bool(data, 62 + idxModule * moduleDataSize, 0)
            station.module[idxModule].process[0].allow_grinding_start = snap7.util.get_bool(data, 62 + idxModule * moduleDataSize, 1)
            station.module[idxModule].process[0].allow_grinding_stop = snap7.util.get_bool(data, 62 + idxModule * moduleDataSize, 2)
            station.module[idxModule].process[0].allow_test_start = snap7.util.get_bool(data, 62 + idxModule * moduleDataSize, 3)
            station.module[idxModule].process[0].allow_test_stop = snap7.util.get_bool(data, 62 + idxModule * moduleDataSize, 4)

        end = time.time()
        # print('station.module[0].process[0].spindle_velocity: ', station.module[0].process[0].spindle_velocity, end - start, 's')

        
        




