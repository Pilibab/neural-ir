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
                # 10 -> 20 to account for weight shift 
                "limit": 20,    
                "filter": {"source": source}
            }
        }, 
        {
            # calculate weighted score 
            "$addFields": {
                "base_score": {
                    # "$meta": Returns the metadata associated with a document
                    "$meta": "vectorSearchScore"
                },
                "weight": {
                    "$switch": {
                        "branches": [
                            { "case": { "$eq": ["$embedding_source", "synopsis"] }, "then": 1.0 },
                            { "case": { "$eq": ["$embedding_source", "title + tags"] }, "then": 0.8 },
                            { "case": { "$eq": ["$embedding_source", "title"] }, "then": 0.5 }
                        ],
                        "default": 0.1 # Fallback for unknown sources
                    }
                }
            }
        },
        {
            # final score = weight * base_score
            "$addFields": {
                "final_score": { "$multiply": ["$base_score", "$weight"] }
            }
        },
        {
            # Re-sort based on the new weighted score
            "$sort": { "final_score": -1 }
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