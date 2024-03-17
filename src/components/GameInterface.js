// /src/GameInterface.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/GameInterface.css"; // Import the CSS file

const GameInterface = ({ children }) => {
  return (
    <div className="GameInterface">
      <h2>Game Interface</h2>
      <Link to="/games">
        <button className="BackButton">Back to Games</button>
      </Link>
      {children}
    </div>
  );
};

export default GameInterface;
