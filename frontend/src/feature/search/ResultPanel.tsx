import type {ManhwaResult}  from "./types";
import "./ResultPanel.css";
import { useState } from "react";
import DisplayInfo from "../../ui/DisplayInfo/DisplayInfo";
import CustomButton from "../../ui/CustomButton/CustomButton";

interface ResultsPanelProps {
    results: ManhwaResult[];
}

const ResultsPanel = ({ results }: ResultsPanelProps) => {
    const [currIdx, setCurrIdx] = useState(0)

    // helper ensures idx stays i bound 
    const canGoPrev = currIdx > 0;
    const canGoNext = currIdx < results.length - 1;

    const handleNext = () => {
        if (canGoNext) setCurrIdx(prevIdx => prevIdx + 1);
    };

    const handlePrev = () => {
        if (canGoPrev) setCurrIdx(prevIdx => prevIdx - 1);
    };


    if (results.length === 0) {
        return <p>No results found.</p>;
    }

    return (
        <div className="results-panel">
            <DisplayInfo info={results[currIdx]}/>

            {// TODO: MAKE IT SO THAT BUTTON IS NOT CLICKABLE FOR RESPECTIVE BOUND 
            }
            <CustomButton
                onClick={handlePrev} 
                disabled={!canGoPrev}
            >{"<"}</CustomButton>
            <CustomButton
                onClick={handleNext} 
                disabled={!canGoNext}
            >{">"}</CustomButton>
        </div>
    );
};

export default ResultsPanel;
