import { createContext } from "react";
import type { VectorSearchMeta } from "../domain/manhwa/VectorSearchMeta";
import type { ManhwaResult } from "../domain/manhwa/Manhwa";

export interface ResultContextValue {
    resultsVectorSearch: VectorSearchMeta[];
    setResultsVectorSearch: React.Dispatch<React.SetStateAction<VectorSearchMeta[]>>;

    resultsManhwaData: ManhwaResult[];
    setResultsManhwaData: React.Dispatch<React.SetStateAction<ManhwaResult[]>>
    clearResults: () => void;
}

const ResultContext = createContext<ResultContextValue | null>(null);

export default ResultContext;
