import type { ManhwaResult } from "../../../domain/manhwa/Manhwa";
import SimilarityScore from "../../../ui/ScoreCircle/ScoreCircle.tsx"; // Adjust path
import "./DisplayFulInfo.css";

interface DisplayFulInfoProps {
    manhwaDetails: ManhwaResult;
    similarityScore?: number ; // Optional prop for the similarity
}

const DisplayFullInfo = ({ manhwaDetails, similarityScore = 85 }: DisplayFulInfoProps) => {
  // Split tags string into an array for better styling

    console.log(manhwaDetails.tags);
    
    return (
        <div className="manhwa-detail-wrapper">
        {/* Left Column: Visuals & Meta */}
        <aside className="manhwa-aside">
            <div className="img-container">
            <img src={manhwaDetails.cover_image_url} alt={manhwaDetails.title} />
            <div className="rank-badge">#{manhwaDetails.rank}</div>
            </div>
            
            <div className="meta-info">
            <div className="meta-item">
                <span>Status:</span> {manhwaDetails.published_date}
            </div>
            <div className="meta-item">
                <span>Chapters:</span> {manhwaDetails.chapters}
            </div>
            <div className="meta-item">
                <span>Rating:</span> ⭐ {manhwaDetails.rating}
            </div>
            </div>

            <a href={manhwaDetails.link} target="_blank" rel="noreferrer" className="read-button">
            View on Site
            </a>
        </aside>

        {/* Right Column: Content */}
        <main className="manhwa-content">
            <header className="manhwa-header">
            <div>
                <h1>{manhwaDetails.title}</h1>
                <div className="tag-list">
                {manhwaDetails.tags.map((tag, index) => (
                    <span key={index} className="tag-chip">{tag}</span>
                ))}
                </div>
            </div>
            
            {/* Similarity Score integration */}
            <div className="score-section">
                <SimilarityScore score={similarityScore} />
                <small>Similarity</small>
            </div>
            </header>

            <section className="synopsis-section">
            <h3>Synopsis</h3>
            <p>{manhwaDetails.synopsis}</p>
            </section>
        </main>
        </div>
    );
};

export default DisplayFullInfo;