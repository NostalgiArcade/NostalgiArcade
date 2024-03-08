// /src/Helpers/GameList.js
import Invaders from "../assets/Space_invaders.png";
import SpaceInvadersGame from "../components/Games/SpaceInvaders";
import PongGame from "../components/Games/p5-pong/sketch";

export const GameList = [
  {
    name: "Space Invaders",
    image: Invaders,
    description: "Arcade",
    component: SpaceInvadersGame,
  },
  {
    name: "Pong",
    image: Invaders,
    description: "Arcade",
    component: PongGame,
  },
];
