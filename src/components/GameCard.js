import React from "react";
import "../styles/GameCard.css";
import { Link } from "react-router-dom";

const GameCard = ({ title, description, image, author, path }) => {
  return (
    <div className="game-card">
      <Link to={path}>
        <img src={image} alt={title} />
      </Link>
      <div className="game-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="author">Author: {author}</p>{" "}
        {/* Use the 'author' prop here */}
      </div>
    </div>
  );
};

export default GameCard;
