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
        },
        {
            # defines exactly which fields should be sent back to your backend 
            # by default all the data within a document is sent back 
            "$project": {
                "_id": 0,
                "title": 1,
                "source": 1,
                "source_id": 1,        # Added this
                # "embedding_text": 1,   # trace source id in manhwa_data then find the synopsis instead
                "score": { "$meta": "vectorSearchScore" }
            }
        }
    ]
    return list(manhwa_vector_collection.aggregate(pipeline))