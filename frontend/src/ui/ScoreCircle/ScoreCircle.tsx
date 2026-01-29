import { Box, CircularProgress, Typography } from '@mui/material';
import './ScoreCircle.css';

const SimilarityScore = ({ score }: { score: number }) => {
    // Determine color based on similarity threshold
    const getColor = (val: number) => {
        if (val >= 80) return 'success'; // Green
        if (val >= 50) return 'warning'; // Orange/Yellow
        return 'error'; // Red
    };

    console.log("curr score",score);
    

    return (
        <Box className="score-circle-container">
        {/* Background Track (The faint gray circle) */}
        <CircularProgress
            variant="determinate"
            className="score-circle-background"
            size={50}
            thickness={4}
            value={100}
        />
        {/* Actual Similarity Score Arc */}
        <CircularProgress
            variant="determinate"
            value={score}
            size={50}
            thickness={4}
            color={getColor(score)}
            className="score-circle-progress"
        />
        {/* Percentage Text in Center */}
        <Box
            className="score-circle-text"
        >
            <Typography variant="caption" className="score-circle-text-typography">
            {`${Math.round(score)}%`}
            </Typography>
        </Box>
        </Box>
    );
};

export default SimilarityScore;