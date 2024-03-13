// /src/pages/Games.js
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import GameInterface from "../components/GameInterface";
import { GameList } from "../Helpers/GameList";

function Games() {
  return (
    <div className="Games">
      <h1 className="GameLibrary"> Welcome to our NostalgiArcade Project</h1>
      <div className="Gamelist">
        {GameList.map((game, key) => (
          <Link
            key={key}
            to={`/games/${game.name.toLowerCase().replace(" ", "")}`}
          >
            <div>
              <img src={game.image} alt={game.name} />
              <h3>{game.name}</h3>
              <p>{game.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <Routes>
        {GameList.map((game, key) => (
          <Route
            key={key}
            path={`/games/${game.name.toLowerCase().replace(" ", "")}`}
            element={
              <GameInterface>
                {React.createElement(game.component)}
              </GameInterface>
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default Games;
