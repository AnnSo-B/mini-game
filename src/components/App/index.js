// npm imports
import React from 'react';
import PropTypes from 'prop-types';

// local imports
import './styles.css';
import Map from '../Map';
import Player from '../../containers/Player';

// component
const App = ({ handleMovement }) => (
  <div
    className="app"
    // https://stackoverflow.com/questions/43503964/onkeydown-event-not-working-on-divs-in-react
    onKeyDown={(event) => handleMovement(event.key)}
    tabIndex="0"
  >
    <Map />
    <Player />
  </div>
);

// Props validation
App.propTypes = {
  handleMovement: PropTypes.func.isRequired,
};

// export
export default App;
