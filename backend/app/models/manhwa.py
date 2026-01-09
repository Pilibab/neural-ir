from pydantic import BaseModel
from typing import List, Optional

class Manhwa(BaseModel):
    # id: Optional[str]
    rank: int | str
    title: str
    synopsis: str
    cover_image_url: str
    rating: float | str
    chapters: int | str
    published_date: str
    tags: List[str]
    link: str
