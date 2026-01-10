from pydantic import BaseModel


class Vector(BaseModel):
    source: str
    source_id: str | int
    title: str
    vector: list
