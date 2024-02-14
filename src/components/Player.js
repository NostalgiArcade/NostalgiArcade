import React from "react";
import "./Player.css"; // Import CSS for styling

const Player = ({
  name,
  nickname,
  description,
  gameScore,
  // profileImage,
}) => {
  return (
    <div className="player-card">
      {/* {profileImage && (
        <div className="player-image">
          <img src={profileImage} alt={name} />
        </div>
      )} */}

      {/* Profile information section */}
      <div className="player-info">
        <div className="player-name">{name}</div>
        {nickname && <div className="player-nickname">{nickname}</div>}
        {description && <div className="player-description">{description}</div>}
      </div>

      {/* Game score section (to be imporoved) */}
      {gameScore && (
        <div className="player-stats">
          <div className="game-score">
            Game Score:
            <span>{gameScore}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
