import React from "react";
import "../styles/GameCard.css";

const GameCard = ({ title, description, image, author }) => { 
  return (
    <div className="game-card">
      <img src={image} alt={title} />
      <div className="game-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="author">Author: {author}</p> {/* Use the 'author' prop here */}
      </div>
    </div>
  );
};

export default GameCard;
