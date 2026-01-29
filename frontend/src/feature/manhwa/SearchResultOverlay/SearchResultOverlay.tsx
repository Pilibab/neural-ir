import { useContext } from "react";
import ResultContext from "../../../context/ResultContext";
import SimilarityScore from "../../../ui/ScoreCircle/ScoreCircle";
import "./SearchResultOverlay.css";

interface DisplayInfoCardProps {
    idx: number
}

const DisplayInfoCard = ({idx}: DisplayInfoCardProps) => {
    const context = useContext(ResultContext);

    if (!context) throw new Error("DisplayInfoCard must be used within a ResultProvider");

    const {resultsVectorSearch} = context

    const item = resultsVectorSearch[idx]
    const score = item.final_score * 100


    return (
            <div className="display-info-card" >
                <SimilarityScore score={score}></SimilarityScore>
                <span className="rank">#{idx + 1}</span>
                <span className="source">{item.source}</span>
            </div>            
    )
}

export default DisplayInfoCard;