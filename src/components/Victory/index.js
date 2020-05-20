// npm imports
import React from 'react';

// local imports
import './style.css';

// component
const Victory = () => (
  <div className="modal">
    <div className="victory-message">Félicitations, vous avez remporté le trésor !!!</div>
    <button className="restart-button" type="button">Pour recommencer une partie, cliquez ici.</button>
  </div>
);

// Props validation

// export
export default Victory;
