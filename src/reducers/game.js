// npm imports

// local imports
import { HANDLE_MOVEMENT } from '../actions';
import getNextPosition from '../functions/movementFunctions';
import tiles from '../data/mapData';

// state
const initialState = {
  tiles,
  position: [0, 0],
};

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_MOVEMENT:
      const nextPosition = getNextPosition(state.position, action.payload);
      return {
        ...state,
        position: nextPosition,
      };
    default:
      return state;
  }
};
