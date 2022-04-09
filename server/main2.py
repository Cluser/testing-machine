# import plc
# import db.general as db
# import snap7
# import time
# # from api import general
# import logging
import threading
import time
from api import general


# while(True):
#     plc_conn_ok = plc.check_connection()
#     if plc_conn_ok: print('Connection to PLC OK') 
#     else: print('Connection to PLC NOK') 


#     while(plc_conn_ok):
#         try:
#             start = time.time()
#             data = plc.client.db_read(99, 0, 260)
#             bool = snap7.util.get_bool(data, 0, 0)
#             int = snap7.util.get_int(data, 2)
#             real = snap7.util.get_real(data, 4)
#             string = snap7.util.get_string(data, 8, 255)
#             end = time.time()
#             print('[0.0]: ', bool, '[2.0]: ', int, '[4.0]:', real, '[8.0]:', string, '[Read time]:', end - start, 's')

#             values = { "bool": bool, "int": int, 'real': real, 'dateTime': end }
#             db.values.insert_one(values)
#             # print(db.values.find_one({'bool': True}))
#         except:
#             input('Error')
#             break

def api_thread():
    general.init()
    # while(True):
    #     print('test')


def plc_thread():
    import plc
    from db import general as db
    import snap7

    plcOb = plc.Plc()
    plcOb.init_connection()
    input(plcOb.check_connection())

    # plcOb = plc()
    # plcOb.check_connection()

    while(True):
        plc_conn_ok = plcOb.check_connection()
        if plc_conn_ok: print('Connection to PLC OK') 
        else: print('Connection to PLC NOK') 


        while(plc_conn_ok):
            try:
                start = time.time()
                data = plcOb.client.db_read(99, 0, 260)
                bool = snap7.util.get_bool(data, 0, 0)
                int = snap7.util.get_int(data, 2)
                real = snap7.util.get_real(data, 4)
                string = snap7.util.get_string(data, 8, 255)
                end = time.time()
                print('[0.0]: ', bool, '[2.0]: ', int, '[4.0]:', real, '[8.0]:', string, '[Read time]:', end - start, 's')

                values = { "bool": bool, "int": int, 'real': real, 'dateTime': end }
                db.values.insert_one(values)
                # print(db.values.find_one({'bool': True}))
            except:
                input('Error')
                break




if __name__ == "__main__":
    api = threading.Thread(target=api_thread)
    api.start()

    # plc = threading.Thread(target=plc_thread)
    # plc.start()