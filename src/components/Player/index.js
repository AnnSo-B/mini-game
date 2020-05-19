// npm imports
import React from 'react';

// local imports
import './style.css';
import playerWalk from './player_walk.png';

// component
const Player = () => (
  <div
    className="player"
    style={
      {
        backgroundImage: `url('${playerWalk}')`,
        top: 0,
        left: 0,
      }
    }
  />
);

// Props validation

// export
export default Player;
