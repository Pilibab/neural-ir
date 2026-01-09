import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../')))

from db.mongo import manhwa_data_collection
from models.manhwa import Manhwa

class ManhwaService:

    def get_by_source(self, source: str, source_id: str):
        return manhwa_data_collection.find_by_source(source, source_id)

    def insert(self, manhwa: Manhwa):
        return manhwa_data_collection.insert(manhwa.model_dump())

    def update(self, _id, manhwa: Manhwa):
        return manhwa_data_collection.update(_id, manhwa.model_dump())

    def upsert(self, manhwa: Manhwa):
        existing = self.get_by_source(manhwa.source, manhwa.source_id)

        if existing:
            self.update(existing["_id"], manhwa)
        else:
            self.insert(manhwa)