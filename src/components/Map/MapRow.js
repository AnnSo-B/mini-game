// npm imports
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// local imports
import './style.css';
import { SPRITE_SIZE } from '../App/config';
import Tile from './Tile';

// component
const MapRow = ({ tileRow }) => (
  <div
    classNAme="row"
    style={{ height: SPRITE_SIZE }}
  >
    {
      tileRow.map((tile) => <Tile key={uuidv4()} tile={tile} />)
    }
  </div>
);

// Props validation
MapRow.propTypes = {
  tileRow: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
};

// export
export default MapRow;
