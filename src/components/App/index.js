// npm imports
import React from 'react';

// local imports
import './styles.css';
import Map from '../Map';
import Player from '../../containers/Player';

// component
const App = () => (
  <div className="app">
    <Map />
    <Player />
  </div>
);

// export
export default App;
