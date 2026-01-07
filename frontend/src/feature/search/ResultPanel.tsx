import type {ManhwaResult}  from "./types";
import "./ResultPanel.css";
import { useState } from "react";
import DisplayInfo from "../../ui/DisplayInfo/DisplayInfo";

interface ResultsPanelProps {
    results: ManhwaResult[];
}

const ResultsPanel = ({ results }: ResultsPanelProps) => {
    const [currIdx, setCurrIdx] = useState(0)

    const next = (jump = 1) => {
        if (checkIdx(currIdx + jump, results)) setCurrIdx(currIdx + jump);
        else setCurrIdx(currIdx)
    };

    const prev = (jump = -1) => {
        if (checkIdx(currIdx + jump, results)) setCurrIdx(currIdx + jump);
        else setCurrIdx(currIdx)
    };


    if (results.length === 0) {
        return <p>No results found.</p>;
    }

    return (
        <div className="results-panel">
            <DisplayInfo info={results[currIdx]}/>
        </div>
    );
};

export default ResultsPanel;


const checkIdx = (nextIdx: number, arr: Array<unknown>) => {
    if (nextIdx < 0 || nextIdx > arr.length) return false; 
    else true
}