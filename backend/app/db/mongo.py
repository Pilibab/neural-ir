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
