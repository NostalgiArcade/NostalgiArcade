// /src/Helpers/GameList.js
import Invaders from "../assets/Space_invaders.png";
import Dino from "../assets/dino_chrome.png";
import DinoGame from "../components/Games/DinoGame";
import SpaceInvadersGame from "../components/Games/SpaceInvaders";
import TetrisGame from "../components/Games/tetris";
import Tetris from "../assets/Tetris.png";
import AsteroidsGame from "../components/Games/Asteroids";
import Asteroids from "../assets/Asteroids.jpg";
import TicTacToe from "../components/Games/TicTacToe";
import TicTacToeImage from "../assets/tic_tac_toe.png";
import Alien from "../assets/alien.png";
import BreakoutGame from "../components/Games/Breakout";
import Breakout from "../assets/Breakout.png";
import PongGame from "../components/Games/p5-pong/PongGame";
import Pong from "../assets/Pong.png";


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
    category: "Aventure",
    component: DinoGame,
  },
  { 
    name: "Tic Tac Toe",
    image: TicTacToeImage,
    description: "Best strategy wins",
    category: "Strategy",
    component: TicTacToe,
  },
  {
    name: "Tetris",
    image: Tetris,
    description: "Colorful puzzle",
    category: "Puzzle",
    component: TetrisGame,
  },
  {
    name: "Asteroids",
    image: Asteroids,
    description: "Multidirectional shooter",
    category: "Space",
    component: AsteroidsGame,
  },

  {
    name: "Alien",
    image: Alien,
    description: "Multidirectional shooter",
    category: "Space",
    component: AsteroidsGame,

  },
  {
    name: "Breakout",
    image: Breakout,
    description: "Arcade",
    component: BreakoutGame,
  },
  {
    name: "Pong",
    image: Pong,
    description: "Arcade",
    component: PongGame,
  },

];
