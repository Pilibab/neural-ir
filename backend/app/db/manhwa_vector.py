def manhwa_vector_schema(
    manhwa_id: int,          # Primary link to your main database
    title: str,              # Useful for debugging/display without a join
    vector: list[float],     # The actual synopsis embedding
    model_name: str,         # To know which model created the vector
    tags: list[str],         # For metadata filtering
):
    return {
        "manhwa_id": manhwa_id,
        "title": title,
        "vector": vector,
        "model_version": model_name,
        "metadata": {
            "tags": tags
        }
    }