// ScoresPage.js
import React from "react";
import "../styles/Scores.css"; // Import CSS file
import GhostAnimation from "../components/GhostAnimation";
import animationData from "../GhostsAnimation.json";

const Scores = () => {
  // Sample scores state
  const scores = [
    { id: 1, name: "Player 1", score: 100 },
    { id: 2, name: "Player 2", score: 150 },
    { id: 3, name: "Player 3", score: 200 },
  ];

  return (
    <div className="score-page">
      <GhostAnimation animationData={animationData} />
      <h1>Scores</h1>
      <ul className="score-list">
        {scores.map((score) => (
          <li key={score.id} className="score-item">
            <span>{score.name}:</span> {score.score}
            <button
              onClick={() => {
                /* We can add functionality to update scores */
              }}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scores;
