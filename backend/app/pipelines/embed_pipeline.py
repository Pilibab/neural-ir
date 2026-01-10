# Handles the process of taking raw or cleaned text data (like manhwa summaries) 
# and generating embeddings (vector representations).

from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')


def embed_pipeline(synopsis: str) -> list:
    return model.encode(synopsis).tolist()