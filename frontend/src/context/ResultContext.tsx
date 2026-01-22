import { createContext } from "react";
import type { VectorSearchMeta } from "../feature/search/types";

export interface ResultContextValue {
    results: VectorSearchMeta[];
    setResults: React.Dispatch<React.SetStateAction<VectorSearchMeta[]>>;
    clearResults: () => void;
}

const ResultContext = createContext<ResultContextValue | null>(null);

export default ResultContext;
