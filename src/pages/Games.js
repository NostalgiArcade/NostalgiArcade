// Games.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import GameInterface from '../components/GameInterface';
import { GameList } from '../Helpers/GameList';
import '../styles/Games.css';
import PacmanAnimation from '../components/PacmanAnimation';
import animationData from '../PacmanAnimation.json';

function Games() {
  return (
    <div className="Games">
      <div>
        <PacmanAnimation animationData={animationData} />
      </div>
      <h1 className="GameLibrary">Games</h1>
      <div className="Gamelist">
        {GameList.map((game, key) => (
          <Link
            key={key}
            to={`/games/${game.name.toLowerCase().replace(/\s/g, '')}`}
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
            path={`/games/${game.name.toLowerCase().replace(/\s/g, '')}`}
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
