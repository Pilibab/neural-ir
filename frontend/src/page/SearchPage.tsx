import { useContext, useEffect, useState } from "react";
import ResultContext from "../context/ResultContext";
import ContainerPanel from "../ui/ContainerPanel/ContainerPanel";
import QueryPanel from "../feature/search/QueryPanel";
import ResultsPanel from "../feature/search/ResultPanel";
import CustomButton from "../ui/CustomButton/CustomButton";

const SearchPage = () => {
    
    const context = useContext(ResultContext);
    // If context is null, don't try to render or access properties
    if (!context) {
        throw new Error("QueryPanel must be used within a ResultProvider");
    }

    const { resultsVectorSearch} = context;

    useEffect(() => {

    }, [resultsVectorSearch]);


        const [currIdx, setCurrIdx] = useState(0)

        // helper ensures idx stays i bound 
        const canGoPrev = currIdx > 0;
        const canGoNext = currIdx < resultsVectorSearch.length - 1;

        const handleNext = () => {
            if (canGoNext) setCurrIdx(prevIdx => prevIdx + 1);
        };

        const handlePrev = () => {
            if (canGoPrev) setCurrIdx(prevIdx => prevIdx - 1);
        };
    return (
        <>
            <ContainerPanel variant="primary">
                <QueryPanel/>

            </ContainerPanel>
            <ContainerPanel variant="primary">
                <ResultsPanel currIdx={currIdx} resultsVectorSearch={resultsVectorSearch}>

                </ResultsPanel>
                {// TODO: MAKE IT SO THAT BUTTON IS NOT CLICKABLE FOR RESPECTIVE BOUND 
                    }
                <div className="button-container">
                    <CustomButton
                        onClick={handlePrev} 
                        disabled={!canGoPrev}
                    >{"<"}</CustomButton>
                    <CustomButton
                        onClick={handleNext} 
                        disabled={!canGoNext}
                    >{">"}</CustomButton>            
                </div>
            </ContainerPanel>
        </>
    )
}

export default SearchPage;