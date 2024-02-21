import React from "react";
import "../styles/GameCard.css";

const GameCard = ({ title, description, image }) => {
  return (
    <div className="game-card">
      <img src={image} alt={title} />
      <div className="game-details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GameCard;
