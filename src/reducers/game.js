// npm imports

// local imports
import { HANDLE_MOVEMENT, START_NEW_GAME } from '../actions';
import { getNextPosition, getNextTileValue, getSpriteLocation } from '../functions/movementFunctions';
import tiles from '../data/mapData';

// state
const initialState = {
  map: 0,
  tiles: tiles[0],
  position: [0, 0],
  spriteLocation: '0px 0px',
  // direction: 'East',
  walkIndex: 0,
  movementCounter: 0,
  victory: false,
};

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_MOVEMENT:
      // eslint-disable-next-line no-case-declarations
      const nextPosition = getNextPosition(state.position, action.payload);
      // eslint-disable-next-line no-case-declarations
      const nextTileValue = getNextTileValue(nextPosition, state.tiles);
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
        // add 1 to movement counter
        movementCounter: nextTileValue !== 2 ? state.movementCounter + 1 : state.movementCounter,
        // if the tile is the treasure, the player wins
        victory: nextTileValue === 2,
      };
    case START_NEW_GAME:
      // eslint-disable-next-line no-case-declarations
      let nextMap = state.map;
      if (action.payload.changeMap === true) {
        nextMap = state.map + 1 < tiles.length ? state.map + 1 : 0;
      }
      return {
        ...initialState,
        map: nextMap,
        tiles: tiles[nextMap],
      };
    default:
      return state;
  }
};
