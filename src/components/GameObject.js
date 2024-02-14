// /src/components/GameObject.js
import React from "react";

function GameObject({ image, name, description, onClick }) {
  return (
    <div className="GameObject" onClick={onClick}>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {name} </h1>
      <p> {description} </p>
    </div>
  );
}

export default GameObject;
