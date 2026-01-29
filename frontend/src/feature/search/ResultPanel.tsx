import type {ResultsPanelProps}  from "./types";
import "./ResultPanel.css";
import ManhwaCard from "../manhwa/ManhwaCard/ManhwaCard";



const ResultsPanel = ({ currIdx, resultsVectorSearch }: ResultsPanelProps) => {
    if (resultsVectorSearch.length === 0) {
        return (
            <div className="results-panel">
                <p>Enter synopsis.</p>
            </div>
        );
    }

    return (
        <div className="results-panel">
            <ManhwaCard idx={currIdx}/>
        </div>
    );
};

export default ResultsPanel;
