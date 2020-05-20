// npm imports

// local imports
import { HANDLE_MOVEMENT } from '../actions';
import { getNextPosition, getNewPosition } from '../functions/movementFunctions';
import tiles from '../data/mapData';

// state
const initialState = {
  tiles,
  position: [0, 0],
  spriteLocation: '0px 0px',
};

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_MOVEMENT:
      // eslint-disable-next-line no-case-declarations
      const nextPosition = getNextPosition(state.position, action.payload);
      // eslint-disable-next-line no-case-declarations
      const newPosition = getNewPosition(state.position, nextPosition);
      return {
        ...state,
        position: newPosition,
      };
    default:
      return state;
  }
};
