import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../')))

from db.mongo import manhwa_data_collection
from models.manhwa import Manhwa

class ManhwaService:

    def upsert(self, manhwa: Manhwa):
        existing = manhwa_data_collection.find_by_source(
            source="mal",
            source_id=manhwa.source_id
        )

        if existing:
            manhwa_data_collection.update(existing["_id"], manhwa.model_dump())
        else:
            manhwa_data_collection.insert(manhwa.model_dump())
