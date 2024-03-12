// /src/Helpers/GameList.js
import Invaders from "../assets/Space_invaders.png";
// import Asteroids from "../assets/Asteroids.png";
import SpaceInvadersGame from "../components/Games/SpaceInvaders";
import AsteroidsGame from "../components/Games/Asteroids";

export const GameList = [
  {
    name: "Space Invaders",
    image: Invaders,
    description: "Arcade",
    component: SpaceInvadersGame,
  },
  {
    name: "Asteroids",
    image: Invaders,
    description: "Arcade",
    component: AsteroidsGame,
  }
];
