import ResultContext from "../context/ResultContext"
import {useState, type PropsWithChildren } from "react";
import type { VectorSearchMeta, ManhwaResult } from "../feature/search/types";

type ResultProviderProps = PropsWithChildren<{}>;

const ResultProvider = ({children} : ResultProviderProps) => {
    const [resultsVectorSearch, setResultsVectorSearch] = useState<VectorSearchMeta[]>([]);
    const [resultsManhwaData, setResultsManhwaData] = useState<ManhwaResult[]>([]);

    const clearResults = () => {
        setResultsVectorSearch([])
        setResultsManhwaData
    };

    return (<ResultContext.Provider 
        value={{
        resultsVectorSearch, setResultsVectorSearch, resultsManhwaData, setResultsManhwaData, clearResults
        }}
    >
        {children}
    </ResultContext.Provider>)
}

export default ResultProvider;