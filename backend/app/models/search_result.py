from pydantic import BaseModel

class SearchResult(BaseModel):
    title: str
    source: str
    source_id: str
    embedding_source: str
    final_score: float
