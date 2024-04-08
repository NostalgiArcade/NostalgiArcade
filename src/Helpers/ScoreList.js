// ScoreList.js

import React from 'react';

const ScoreList = ({ scores }) => {
  return (
    <ul>
      {scores.map(score => (
        <li key={score.id}>
          {score.name}: {score.score}
        </li>
      ))}
    </ul>
  );
}

export default ScoreList;
