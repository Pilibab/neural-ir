import type {VectorSearchMeta}  from "./types";
import "./ResultPanel.css";

interface ResultsPanelProps {
    currIdx: number,
    results: VectorSearchMeta[];
}

const ResultsPanel = ({ currIdx, results }: ResultsPanelProps) => {
    if (results.length === 0) {
        return <p>No results found.</p>;
    }

    return (
        <div className="results-panel">
        </div>
    );
};

export default ResultsPanel;
