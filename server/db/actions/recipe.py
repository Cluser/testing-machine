from bson.json_util import dumps
from bson.json_util import loads
from db import general as db
from db.general import serializeDict, serializeList

def addRecipe(name: str):
    return db.client.recipes.insert_one({"name": name})

def getRecipes():
    cursor = db.client.recipes.find()
    return serializeList(cursor)
