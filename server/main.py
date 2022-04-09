import threading
from api import general as api
from plc import general as plc

class Main():

    def __init__(self) -> None:
        pass

    def api_thread():
        apiOb = api.Api()
        apiOb.run()

    def plc_thread():
        plcOb = plc.Plc()
        plcOb.connect()
        plcOb.check_connection()

        while(True):
            try:
                plcOb.get_data()
            except:
                input('Error')
                break


    if __name__ == "__main__":
        apiThread = threading.Thread(target = api_thread)
        apiThread.start()

        plcThread = threading.Thread(target = plc_thread)
        plcThread.start()
