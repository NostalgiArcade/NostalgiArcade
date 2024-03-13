// /src/Helpers/GameList.js
import Invaders from "../assets/Space_invaders.png";
import Dino from "../assets/dino_chrome.png";
import DinoGame from "../components/Games/DinoGame";
import SpaceInvadersGame from "../components/Games/SpaceInvaders";
import TicTacToe from "../components/Games/TicTacToe";

export const GameList = [
  {
    name: "Space Invaders",
    image: Invaders,
    description: "Space vertical shooter",
    category: "Arcade",
    component: SpaceInvadersGame,
    interface: "",
  },
  {
    name: "Dino Game",
    image: Dino,
    description: "Running from extinsion",
    category: "Obstacle runner",
    component: DinoGame,
    interface: "DinoInterface",
  },

  {
    name: "Tic Tac Toe",
    image: Invaders,
    description: "Arcade",
    component: TicTacToe,
  },
];
