// /src/Helpers/GameList.js
import Invaders from "../assets/Space_invaders.png";
import SpaceInvadersGame from "../components/Games/SpaceInvaders";
import TicTacToe from "../components/Games/TicTacToe";

export const GameList = [
  {
    name: "Space Invaders",
    image: Invaders,
    description: "Arcade",
    component: SpaceInvadersGame,
  },

  {
    name: "Tic Tac Toe",
    image: Invaders,
    description: "Arcade",
    component: TicTacToe,
  },
];
