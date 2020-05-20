// npm imports
import React from 'react';
import PropTypes from 'prop-types';

// local imports
import './style.css';

// component
const Victory = ({ startNewGame }) => (
  <div className="modal">
    <div className="victory-message">Félicitations, vous avez remporté le trésor !!!</div>
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
  startNewGame: PropTypes.func.isRequired,
};

// export
export default Victory;
