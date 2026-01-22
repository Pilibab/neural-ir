def format_search_results(results: list):
    """
    Takes the raw search results (with debug/bias info) and 
    returns only the essential fields for the user.
    """
    return [
        {
            "title": res.get("title"),
            "source": res.get("source"),
            "source_id": res.get("source_id"),
            "embedding_source": res.get("embedding_source"),
            "final_score": res.get("final_score")
        }
        for res in results
    ]