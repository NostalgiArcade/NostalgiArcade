// GhostAnimation.js
import React from 'react';
import Lottie from 'react-lottie';

const GhostAnimation = ({ animationData }) => {
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

export default GhostAnimation;
