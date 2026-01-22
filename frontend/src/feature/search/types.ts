// ! Move this? since files from higher folder also uses this

export interface ManhwaResult {
    rank: number;
    title: string;
    synopsis: string;
    cover_image_url: string;
    rating: number;
    chapters: string | number;
    published_date: string;
    tags: string;
    link: string;
}

export interface VectorSearchMeta {
    title: string;
    source: string;
    source_id: string;
    embedding_source: string;
    final_score: number;
}

// ==============================
// type of each key-value
// ==============================
// Key: title                | Types: [str]
// Key: source               | Types: [str]
// Key: source_id            | Types: [int]
// Key: embedding_source     | Types: [str]
// Key: final_score          | Types: [float]