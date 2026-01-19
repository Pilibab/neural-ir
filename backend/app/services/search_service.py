# app/services/search_service.py
from db.mongo import manhwa_vector_collection


def search_manhwa(query_vector, source="MAL"):
    pipeline = [
        {
            "$vectorSearch": {
                "index": "vector_index", 
                "path": "vector",
                "queryVector": query_vector,
                "numCandidates": 100,
                "limit": 10,
                "filter": {"source": source}
            }
        }
    ]
    return list(manhwa_vector_collection.aggregate(pipeline))