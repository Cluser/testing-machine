import snap7
import time
from db import general as db

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
        data = self.client.db_read(99, 0, 260)
        # bool = snap7.util.get_bool(data, 0, 0)
        bool = self.get_bool()
        int = snap7.util.get_int(data, 2)
        real = snap7.util.get_real(data, 4)
        string = snap7.util.get_string(data, 8, 255)
        end = time.time()
        print('[0.0]: ', bool, '[2.0]: ', int, '[4.0]:', real, '[8.0]:', string, '[Read time]:', end - start, 's')

        values = { "bool": bool, "int": int, 'real': real, 'dateTime': end }
        # db.values.insert_one(values)
        return values
        


