// npm imports
import React from 'react';
import PropTypes from 'prop-types';

// local imports
import './styles.css';
import { MAP_WIDTH } from './config';
import Map from '../../containers/Map';
import Player from '../../containers/Player';

// component
const App = ({ handleMovement }) => (
  <div
    className="app"
    // https://stackoverflow.com/questions/43503964/onkeydown-event-not-working-on-divs-in-react
    onKeyDown={
      (event) => {
        // prevent the page to move
        event.preventDefault();
        handleMovement(event.key);
      }
    }
    tabIndex="0"
  >
    <header className="header">
      <h1 className="title">Bienvenue sur ce mini-jeu</h1>
      <p className="instructions">Vous pouvez déplacer le personnage à l'aide des flèches de votre clavier. Certains obstacles sont surmontables et d'autres non. A vous de trouver lesquels !</p>
    </header>
    <main
      className="main"
      style={{
        width: MAP_WIDTH,
      }}
    >
      <Map />
      <Player />
    </main>
  </div>
);

// Props validation
App.propTypes = {
  handleMovement: PropTypes.func.isRequired,
};

// export
export default App;
