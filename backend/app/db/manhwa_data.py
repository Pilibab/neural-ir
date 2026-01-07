def manhwa_schema_validation(
    rank: int,
    title: str,
    synopsis: str,
    cover_image_url: str,
    rating: int,
    chapters: str | int,
    published_date: str,
    tags: str,
    link: str,
):
    return {
        rank: int,
        title: str,
        synopsis: str,
        cover_image_url: str,
        rating: int,
        chapters: str | int,
        published_date: str,
        tags: str,
        link: str,
    }