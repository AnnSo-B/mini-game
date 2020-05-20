// npm imports
import React from 'react';
import PropTypes from 'prop-types';

// local imports
import './style.css';

// component
const Victory = ({ movementCounter, startNewGame }) => (
  <div className="modal">
    <div className="victory-message">Félicitations, vous avez atteint le trésor en {movementCounter} pas !!!</div>
    <button
      className="restart-button"
      type="button"
      onClick={startNewGame}
    >
      Pour recommencer une partie, cliquez ici.
    </button>
  </div>
);

// Props validation
Victory.propTypes = {
  movementCounter: PropTypes.number.isRequired,
  startNewGame: PropTypes.func.isRequired,
};

// export
export default Victory;
