// npm imports

// local imports
import { HANDLE_MOVEMENT } from '../actions';
import { SPRITE_SIZE } from '../components/App/config';
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
      switch (action.payload) {
        case 'ArrowRight':
          return {
            ...state,
            position: [
              state.position[0] + SPRITE_SIZE < 800 ? state.position[0] + SPRITE_SIZE : state.position[0],
              state.position[1],
            ],
          };
        case 'ArrowLeft':
          return {
            ...state,
            position: [
              state.position[0] - SPRITE_SIZE < 0 ? state.position[0] : state.position[0] - SPRITE_SIZE,
              state.position[1],
            ],
          };
        case 'ArrowDown':
          return {
            ...state,
            position: [
              state.position[0],
              state.position[1] + SPRITE_SIZE < 400 ? state.position[1] + SPRITE_SIZE : state.position[1],
            ],
          };
        case 'ArrowUp':
          return {
            ...state,
            position: [
              state.position[0],
              state.position[1] - SPRITE_SIZE < 0 ? state.position[1] : state.position[1] - SPRITE_SIZE,
            ],
          };
        default:
          return state;
      };
    default:
      return state;
  }
};
