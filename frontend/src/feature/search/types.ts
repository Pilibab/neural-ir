import type { VectorSearchMeta } from "../../domain/manhwa/VectorSearchMeta";


export interface ResultsPanelProps {
    currIdx: number;
    resultsVectorSearch: VectorSearchMeta[];
}