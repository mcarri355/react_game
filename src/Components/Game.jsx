// Game.jsx
import React from 'react';
import Player from './Player';

const Game = () => {
  const handleKeyPress = (event) => {
    // Handle player movement here
    // For example, update player's position based on keypress
  };

  return (
    <div
      tabIndex="0"
      onKeyDown={handleKeyPress}
      style={{ width: '100vw', height: '100vh', background: 'lightblue', position: 'relative' }}
    >
      <Player />
    </div>
  );
};

export default Game;
