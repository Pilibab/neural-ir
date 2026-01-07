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
