// CategoriesBar.js
import React, { useState } from "react";
import "../styles/CategoriesBar.css";

const CategoriesBar = ({ categories, onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (categoryId) => {
    setActiveCategory(categoryId);
    onSelectCategory(categoryId);
  };

  const handleAllClick = () => {
    setActiveCategory(null); // Reset active category to null
    onSelectCategory(null); // Pass null to indicate all categories
  };

  return (
    <div className="categories-bar">
      <button
        onClick={handleAllClick}
        className={`category-button ${
          activeCategory === null ? "active" : ""
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleClick(category.id)}
          className={`category-button ${
            activeCategory === category.id ? "active" : ""
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};
export default CategoriesBar;
