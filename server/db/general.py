import pymongo

class Db():
    def __init__(self) -> None:
        self.client = pymongo.MongoClient("mongodb://localhost:27017/")
        self.db = self.client["snap7"]
        self.values = self.db["values"]
