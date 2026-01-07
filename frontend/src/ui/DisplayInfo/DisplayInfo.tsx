import type { ManhwaResult } from "../../feature/search/types";

interface DisplayInfoProps{
    info: ManhwaResult;
}

const DisplayInfo = ({ info } : DisplayInfoProps) => {
    return (
            <div key={info.rank} className="result-card">
            <img
                src={info.cover_image_url}
                alt={info.title}
                className="result-cover"
            />

            <div className="result-content">
                <h3 className="result-title">
                #{info.rank} — {info.title}
                </h3>

                <p className="result-rating">
                ⭐ {info.rating}
                </p>

                <p className="result-meta">
                <strong>Chapters:</strong> {info.chapters}<br />
                <strong>Published:</strong> {info.published_date}
                </p>

                <p className="result-tags">
                {info.tags}
                </p>

                <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="result-link"
                >
                View on MyAnimeList
                </a>
            </div>
            </div>

    );
}

export default DisplayInfo;