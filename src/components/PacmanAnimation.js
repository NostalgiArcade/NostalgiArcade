// PacmanAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import '../styles/PacmanAnimation.css'; // Import CSS file

const PacmanAnimation = ({ animationData }) => {
  return (
    <div className="animation-container">
      <Lottie
        options={{
          animationData: animationData,
        }}
      />
    </div>
  );
}

export default PacmanAnimation;