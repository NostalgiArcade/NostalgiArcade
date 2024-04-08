// /src/Helpers/GameList.js
import Invaders from "../assets/Space_invaders.png";
import Dino from "../assets/dino_chrome.png";
import DinoGame from "../components/Games/DinoGame";
import SpaceInvadersGame from "../components/Games/SpaceInvaders";
import TicTacToe from "../components/Games/TicTacToe";
import TetrisGame from "../components/Games/tetris";
import AsteroidsGame from "../components/Games/Asteroids";
import BreakoutGame from "../components/Games/Breakout";
import PongGame from "../components/Games/p5-pong/PongGame";

export const GameList = [
  {
    name: "Space Invaders",
    image: Invaders,
    description: "Space vertical shooter",
    category: "Arcade",
    component: SpaceInvadersGame,
  },
  {
    name: "Dino Game",
    image: Dino,
    description: "Running from extinsion",
    category: "Obstacle runner",
    component: DinoGame,
  },
  {
    name: "Tic Tac Toe",
    image: Invaders,
    description: "Arcade",
    component: TicTacToe,
  },
  {
    name: "Tetris",
    image: Dino,
    description: "asdfasd",
    category: "strategy",
    component: TetrisGame,
  },
  {
    name: "Asteroids",
    image: Invaders,
    description: "Arcade",
    component: AsteroidsGame,
  },
  {
    name: "Breakout",
    image: Invaders,
    description: "Arcade",
    component: BreakoutGame,
  },
  {
    name: "Pong",
    image: Invaders,
    description: "Arcade",
    component: PongGame,
  },
];
