// npm imports
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// local imports
import './style.css';
import MapRow from './MapRow';
import { MAP_HEIGHT } from '../App/config';


// component
const Map = ({ tiles }) => (
  <div
    style={{ height: MAP_HEIGHT }}
    className="map"
  >
    {
      tiles.map((tileRow) => <MapRow key={uuidv4()} tileRow={tileRow} />)
    }
  </div>
);

// Props validation
Map.propTypes = {
  tiles: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.number,
    ),
  ).isRequired,
};

// export
export default Map;
