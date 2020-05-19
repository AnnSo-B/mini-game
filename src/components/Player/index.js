// npm imports
import React from 'react';
import PropTypes from 'prop-types';

// local imports
import './style.css';
import playerWalk from './player_walk.png';

// component
const Player = ({ playerPosition }) => (
  <div
    className="player"
    style={
      {
        backgroundImage: `url('${playerWalk}')`,
        top: playerPosition[1],
        left: playerPosition[0],
      }
    }
  />
);

// Props validation
Player.propTypes = {
  playerPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
};

// export
export default Player;
