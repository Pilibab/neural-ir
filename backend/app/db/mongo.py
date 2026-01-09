# creates MongoClient and db
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

db_link = os.environ.get("MONGODB_PASSWORD")
client = MongoClient(f'{db_link}')

db = client.manhwa_db

manhwa_vector_collection = db.manhwa_vectors
manhwa_data_collection = db.manhwa_data

def find_by_source(source, source_id):
    return manhwa_data_collection.find_one({
        "source": source,
        "source_id": source_id
    })

def insert(doc):
    manhwa_data_collection.insert_one(doc)

def update(_id, doc):
    manhwa_data_collection.update_one(
        {"_id": _id},
        {"$set": doc}
    )
