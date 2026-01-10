from models.manhwa import Manhwa
def has_changes(existing: dict, incoming: Manhwa) -> bool:
    incoming_data = incoming.model_dump()

    FIELDS_TO_COMPARE = [
        "title",
        "hashed_synopsis",
        "rating",
        "chapters",
        "published_date",
        "tags",
        "cover_image_url",
        "rank",
        "link",
    ]

    for field in FIELDS_TO_COMPARE:
        if existing.get(field) != incoming_data.get(field):
            return True

    return False
