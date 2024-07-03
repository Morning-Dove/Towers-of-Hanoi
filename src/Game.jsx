import React, { useState } from 'react';
import Tower from './Tower';

const Game = () => {
  const [towers, setTowers] = useState({
    A: [6, 5, 4, 3, 2, 1],
    B: [],
    C: [],
  });

  return (
    <div className="Game">
      {Object.keys(towers).map((key) => (
        <Tower key={key} discs={towers[key]} />
      ))}
    </div>
  );
};

export default Game;



