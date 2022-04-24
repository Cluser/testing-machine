from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from db import general as db
from db.general import serializeList, serializeDict
from db.models.recipe import Recipe
from bson import ObjectId

router = APIRouter()

@router.get("/recipe", tags=["Recipe"])
async def get():
    return serializeList(db.client.recipes.find())

@router.post("/recipe", tags=["Recipe"])
async def post(recipe: Recipe):
    _id = db.client.recipes.insert_one(jsonable_encoder(recipe))
    return serializeList(db.client.recipes.find({"_id": _id.inserted_id}))

@router.put("/{id}", tags=["Recipe"])
async def put(id: str, recipe: Recipe):
    db.client.recipes.find_one_and_update({"_id": ObjectId(id)}, {"$set": jsonable_encoder(recipe)})
    return serializeList(db.client.recipes.find({"_id": ObjectId(id)}))

@router.delete("/{id}", tags=["Recipe"])
async def delete(id: str):
    db.client.recipes.find_one_and_delete({"_id": ObjectId(id)})
    return {"status": "ok"}