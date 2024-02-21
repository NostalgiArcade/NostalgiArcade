import React from "react";
import GameCard from "../components/GameCard"; // Path for project structure
import CategoriesBar from "../components/CategoriesBar"; // Adjust the path as needed

const games = [
  {
    id: 1,
    title: "Tic Tac Toe",
    description: "Description of Game 1",
    image: "tic_tac_toe.png", // Path to game image
  },
  {
    id: 2,
    title: "Space Invaders",
    description: "Description of Game 2",
    image: "Space_invaders.png", // Path to game image
  },
  // Add more games as needed
];

const categories = [
  { id: 1, name: "Action" },
  { id: 2, name: "Adventure" },
  { id: 3, name: "Puzzle" },
  { id: 4, name: "RPG" },
  { id: 5, name: "Strategy" },
];

const Home = () => {
  const handleSelectCategory = (categoryId) => {
    // Handle category selection logic here
    console.log("Selected category:", categoryId);
  };

  return (
    <div className="home">
      <h1>Welcome to Our Games Website!</h1>
      <CategoriesBar
        categories={categories}
        onSelectCategory={handleSelectCategory}
      />
      <div className="game-cards">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            description={game.description}
            image={require(`../assets/${game.image}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
