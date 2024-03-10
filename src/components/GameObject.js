// /src/components/GameObject.js
import React from "react";
import "../styles/GameObject.css";

function GameObject({ image, name, description }) {
  return (
    <div className="GameObject">
      <img src={image} alt={name} />
      <div className="GameDisplay">
        <h2> {name} </h2>
        <p> {description} </p>
      </div>
    </div>
  );
}

export default GameObject;
