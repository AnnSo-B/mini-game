// npm imports
import React from 'react';
import PropTypes from 'prop-types';

// local imports
import './style.css';

// component
const Counter = ({ movementCounter }) => (
  <div className="counter">
    Nombre de mouvement : {movementCounter}
  </div>
);

// Props validation
Counter.propTypes = ({
  movementCounter: PropTypes.number.isRequired,
});

// export
export default Counter;
