// npm imports

// local imports
import { HANDLE_MOVEMENT } from '../actions';
import { getNextPosition, getNextTileValue, getSpriteLocation } from '../functions/movementFunctions';
import tiles from '../data/mapData';

// state
const initialState = {
  tiles,
  position: [0, 0],
  spriteLocation: '0px 0px',
  // direction: 'East',
  walkIndex: 0,
  victory: false,
};

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_MOVEMENT:
      // eslint-disable-next-line no-case-declarations
      const nextPosition = getNextPosition(state.position, action.payload);
      // eslint-disable-next-line no-case-declarations
      const nextTileValue = getNextTileValue(nextPosition);
      // eslint-disable-next-line no-case-declarations
      const newSpriteLocation = getSpriteLocation(
        state.spriteLocation,
        action.payload,
        state.walkIndex,
      );
      return {
        ...state,
        position: nextTileValue < 6 ? nextPosition : state.position,
        spriteLocation: newSpriteLocation,
        // since we have 8 index to our sprite, when it's higher than 7, we need to go back to 0
        walkIndex: state.walkIndex + 1 > 7 ? 0 : state.walkIndex + 1,
        // if the tile is the treasure, the player wins
        victory: nextTileValue === 2,
      };
    default:
      return state;
  }
};
