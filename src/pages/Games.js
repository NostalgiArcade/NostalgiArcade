// /src/pages/Games.js
import React from "react";
import { GameList } from "../Helpers/GameList";
import GameObject from "../components/GameObject";
import { Link } from "react-router-dom";

function Games() {
  return (
    <div className="Games">
      <h1 className="GameLibrary"> Welcome to our NostalgiArcade Project</h1>
      <div className="Gamelist">
        {GameList.map((game, key) => (
          <Link key={key} to={`/games/${game.interface.toLowerCase()}`}>
            <GameObject
              image={game.image}
              name={game.name}
              description={game.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Games;
