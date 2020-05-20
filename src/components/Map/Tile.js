// npm imports
import React from 'react';
import PropTypes from 'prop-types';

// local imports
import './style.css';
import { SPRITE_SIZE } from '../App/config';
import rock from '../../assets/images/tiles/rock.png';
import tree from '../../assets/images/tiles/tree.png';

// component
const Tile = ({ tile }) => {
  let image = '';

  switch (tile) {
    // passable obstacles
    case 1:
      image = tree;
      break;
    // impassable obstacles
    case 6:
      image = rock;
      break;
    case 7:
      image = tree;
      break;
    // grass by default
    default:
      image = '';
  }

  return (
    <div
      className="tile"
      style={
        {
          width: SPRITE_SIZE,
          height: SPRITE_SIZE,
        }
      }
    >
      <img src={image} alt={image} />
    </div>
  );
};

// Props validation
Tile.propTypes = {
  tile: PropTypes.number.isRequired,
};

// export
export default Tile;
