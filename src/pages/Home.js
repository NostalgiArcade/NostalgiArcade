import React, { useState } from "react";
import GameCard from "../components/GameCard"; // Path for project structure
import CategoriesBar from "../components/CategoriesBar"; // Adjust the path as needed

const games = [
  {
    id: 1,
    title: "Tic Tac Toe",
    description: "Description of Game 1",
    category: "Strategy",
    image: "tic_tac_toe.png", // Path to game image
    author: "Vida Lima", // Add author information
  },
  {
    id: 2,
    title: "Space Invaders",
    description: "Description of Game 2",
    category: "Space",
    image: "Space_invaders.png", // Path to game image
    author: "Jack", // Add author information
  },
  {
    id: 3,
    title: "Alien",
    description: "Description of Game 3",
    category: "Space",
    image: "alien.png", // Path to game image
    author: "Kevin", // Add author information
  },
  {
    id: 4,
    title: "Place holder",
    description: "Description of Game 4",
    category: "Action",
    image: "tic_tac_toe.png", // Path to game image
    author: "Dario", // Add author information
  },
  {
    id: 5,
    title: "Place holder",
    description: "Description of Game 5",
    category: "Puzzle",
    image: "tic_tac_toe.png", // Path to game image
    author: "Yuri", // Add author information
  },

  {
    id: 6,
    title: "Place holder",
    description: "Description of Game 6",
    category: "Adventure",
    image: "tic_tac_toe.png", // Path to game image
    author: "Augusto Freire", // Add author information
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
      const filtered = games.filter((game) => game.category === categories.find(cat => cat.id === categoryId).name);
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
          />
        ))}
      </div>
    </div>
  );
};


export default Home;
