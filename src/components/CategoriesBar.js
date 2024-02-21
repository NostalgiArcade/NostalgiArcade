// CategoriesBar.js
import React from 'react';
import "../styles/CategoriesBar.css";

const CategoriesBar = ({ categories, onSelectCategory }) => {
  return (
    <div className="categories-bar">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className="category-button"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoriesBar;
