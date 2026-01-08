def manhwa_schema_data(
    rank: int | str,
    title: str,
    synopsis: str,
    cover_image_url: str,
    rating: float | str,
    chapters: str | int,
    published_date: str,
    tags: str,
    link: str,
):
    return {
        rank: int | str,
        title: str,
        synopsis: str,
        cover_image_url: str,
        rating: float | str,
        chapters: str | int,
        published_date: str,
        tags: str,
        link: str,
    }