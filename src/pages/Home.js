import React, { useState } from "react";
import GameCard from "../components/GameCard"; // Path for project structure
import CategoriesBar from "../components/CategoriesBar"; // Adjust the path as needed

const games = [
  {
    id: 1,
    title: "Tic Tac Toe",
    description: "Best strategy wins",
    category: "Strategy",
    image: "tic_tac_toe.png", // Path to game image
    author: "Vida Lima", // Add author information
    path: "/games/tictactoe", // Add the path to the game
  },
  {
    id: 2,
    title: "Space Invaders",
    description: "Space vertical shooter",
    category: "Space",
    image: "Space_invaders.png", // Path to game image
    author: "Jack Aguilera", // Add author information
    path: "/games/spaceinvaders", // Add the path to the game
  },
  {
    id: 3,
    title: "Tetris",
    description: "Colorful puzzle",
    category: "Puzzle",
    image: "Tetris.png", // Path to game image
    author: "Dario Betancourth", // Add author information
    path: "/games/tetris", // Add the path to the game
  },

  {
    id: 4,
    title: "Dino Game",
    description: "Running from extinsion",
    category: "Action",
    image: "dino_chrome.png", // Path to game image
    author: "Jack Aguilera ", // Add author information
    path: "/games/dinogame", // Add the path to the game
  },

  {
    id: 5,
    title: "Alien",
    description: "Description of Game 3",
    category: "Space",
    image: "alien.png", // Path to game image
    author: "Kevin Haro", // Add author information
    path: "/games/alien", // Add the path to the game
  },
  {
    id: 6,
    title: "Asteroids",
    description: "Multidirectional shooter",
    category: "Space",
    image: "Asteroids.jpg", // Path to game image
    author: "Augusto Freire", // Add author information
    path: "/games/asteroids", // Add the path to the game
  },

  {
    id: 7,
    title: "Pong",
    description: "Table tennis",
    category: "Adventure",
    image: "Pong.png", // Path to game image
    author: "Yuri Zanini", // Add author information
    path: "/games/pong", // Add the path to the game
  },

  {
    id: 8,
    title: "Breakout",
    description: "Break the rectangles",
    category: "Adventure",
    image: "Breakout.png", // Path to game image
    author: "Augusto Freire", // Add author information
    path: "/games/breakout", // Add the path to the game
  },

  // Add more games as needed
];

const categories = [
  { id: 1, name: "Action" },
  { id: 2, name: "Adventure" },
  { id: 3, name: "Puzzle" },
  { id: 4, name: "Space" },
  { id: 5, name: "Strategy" },
];

const Home = () => {
  const [filteredGames, setFilteredGames] = useState(games); // State to hold filtered games

  // Function to handle category selection
  const handleSelectCategory = (categoryId) => {
    if (categoryId === null) {
      // If null is passed, display all games
      setFilteredGames(games);
    } else {
      // Filter games based on the selected category
      const filtered = games.filter(
        (game) =>
          game.category === categories.find((cat) => cat.id === categoryId).name
      );
      setFilteredGames(filtered);
    }
  };

  return (
    <div className="categoryTitleColor">
      <h3>Categories</h3>
      <hr className="category-line" />
      <CategoriesBar
        categories={categories}
        onSelectCategory={handleSelectCategory}
      />
      <div className="game-cards">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            description={game.description}
            image={require(`../assets/${game.image}`)}
            author={game.author} // Pass the author's name
            path={game.path} // Pass the path to the game
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
