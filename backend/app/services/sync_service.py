import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../')))

from db.mongo import manhwa_vector_collection
from db.repository import Repository
from models.manhwa import Manhwa
from utils.find_changes import has_changes

class SyncService:
    def __init__(self):
        self.repository = Repository(manhwa_vector_collection)

    def get_by_source(self, source: str, source_id: str):
        return self.repository.find_by_source(source, source_id)

    def insert(self, manhwa: Manhwa):
        return self.repository.insert(manhwa.model_dump())

    def update(self, _id, manhwa: Manhwa):
        return self.repository.update(_id, manhwa.model_dump())

    def sync(self, manhwa: Manhwa):
        existing = self.get_by_source(manhwa.source, manhwa.source_id)

        if not existing:
            print(f"✨ Inserting new: {manhwa.title}")
            self.insert(manhwa)
            return "inserted"

        if has_changes(existing, manhwa):
            print(f"🔄 Updating changed data: {manhwa.title}")
            self.update(existing["_id"], manhwa)
            return "updated"

        print(f"⏭ No changes: {manhwa.title}")
        return "skipped"
