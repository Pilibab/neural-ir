import type {ManhwaResult}  from "./types";
import "./ResultPanel.css";
import DisplayInfo from "../manhwa/DisplayInfo/DisplayInfo";

interface ResultsPanelProps {
    currIdx: number,
    results: ManhwaResult[];
}

const ResultsPanel = ({ currIdx, results }: ResultsPanelProps) => {
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
