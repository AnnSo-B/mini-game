// npm imports
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// local imports
import './styles.css';
import { MAP_WIDTH } from './config';
import Victory from '../../containers/Victory';
import Map from '../../containers/Map';
import Player from '../../containers/Player';
import Counter from '../../containers/Counter';

// component
const App = ({ victory, handleMovement }) => {
  const onKeyDownRef = useRef(null);
  useEffect(() => {
    onKeyDownRef.current.focus();
  }, [victory]);

  return (
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
      ref={onKeyDownRef}
    >
      <header
        className="header"
        style={{ width: MAP_WIDTH }}
      >
        <h1 className="title">Bienvenue sur ce mini-jeu</h1>
        <p className="instructions">Vous pouvez déplacer le personnage à l'aide des flèches de votre clavier. Certains obstacles sont surmontables et d'autres non. A vous de trouver lesquels !</p>
      </header>
      <main
        className="main"
        style={{ width: MAP_WIDTH }}
      >
        {
          victory && <Victory />
        }
        <Map />
        <Player />
        {
          !victory && <Counter />
        }
      </main>
    </div>
  );
};

// Props validation
App.propTypes = {
  victory: PropTypes.bool.isRequired,
  handleMovement: PropTypes.func.isRequired,
};

// export
export default App;
