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

    def get_bool(self) -> bool:
        data = self.client.db_read(99, 0, 260)
        return snap7.util.get_bool(data, 0, 0)

    def get_data(self):
        start = time.time()
        data = self.client.db_read(199, 0, 72)
        # db.values.insert_one(values)

        station.lifebit = snap7.util.get_bool(data, 0, 0)
        for x in range(8): station.alarm[x] = snap7.util.get_bool(data, 2, x) 
        for x in range(8): station.alarm[8+x] = snap7.util.get_bool(data, 3, x) 
        for x in range(4): station.alarm[16+x] = snap7.util.get_bool(data, 4, x) 


        for idxModule in range(3):
            station.module[idxModule].id = snap7.util.get_int(data, 6 + idxModule * 22)
            station.module[idxModule].process[0].id = snap7.util.get_int(data, 8 + idxModule * 22)
            for x in range(8): station.module[idxModule].process[0].alarm[x] = snap7.util.get_bool(data, 10 + idxModule * 22, x) 
            for x in range(8): station.module[idxModule].process[0].alarm[8+x] = snap7.util.get_bool(data, 11 + idxModule * 22, x) 
            for x in range(4): station.module[idxModule].process[0].alarm[16+x] = snap7.util.get_bool(data, 12 + idxModule * 22, x) 

            station.module[idxModule].process[0].status = snap7.util.get_int(data, 14 + idxModule * 22)
            station.module[idxModule].process[0].spindle_no = snap7.util.get_int(data, 16 + idxModule * 22)
            station.module[idxModule].process[0].time_left = snap7.util.get_int(data, 18 + idxModule * 22)
            station.module[idxModule].process[0].spindle_velocity = snap7.util.get_int(data, 20 + idxModule * 22)
            station.module[idxModule].process[0].motor_velocity = snap7.util.get_int(data, 22 + idxModule * 22)
            station.module[idxModule].process[0].motor_temperature = snap7.util.get_int(data, 24 + idxModule * 22)
            station.module[idxModule].process[0].outside_temperature = snap7.util.get_int(data, 26 + idxModule * 22)

        end = time.time()
        print('station.module[0].process[0].spindle_velocity: ', station.module[0].process[0].spindle_velocity, end - start, 's')

        
        




