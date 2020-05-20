// local imports
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../components/App/config';
import tiles from '../data/mapData';

// functions
// determine which position we'll be next according to player's movement
export const getNextPosition = (oldPosition, direction) => {
  let nextPosition = [];

  switch (direction) {
    case 'ArrowRight':
      nextPosition = [
        oldPosition[0] + SPRITE_SIZE < MAP_WIDTH
          ? oldPosition[0] + SPRITE_SIZE : oldPosition[0],
        oldPosition[1],
      ];
      break;
    case 'ArrowLeft':
      nextPosition = [
        oldPosition[0] - SPRITE_SIZE < 0
          ? oldPosition[0] : oldPosition[0] - SPRITE_SIZE,
        oldPosition[1],
      ];
      break;
    case 'ArrowDown':
      nextPosition = [
        oldPosition[0],
        oldPosition[1] + SPRITE_SIZE < MAP_HEIGHT
          ? oldPosition[1] + SPRITE_SIZE : oldPosition[1],
      ];
      break;
    case 'ArrowUp':
      nextPosition = [
        oldPosition[0],
        oldPosition[1] - SPRITE_SIZE < 0
          ? oldPosition[1] : oldPosition[1] - SPRITE_SIZE,
      ];
      break;
    default:
      nextPosition = oldPosition;
      break;
  }
  return nextPosition;
};

// determine if the next tile is passable and return the position
export const getNewPosition = (oldPosition, nextPosition) => {
  // we need to get the coordinate corresponding to the next position
  // the new position is a pixel size so we need to divide it by the
  // sprite size to get the coordinate in the map
  const nextTileX = nextPosition[0] / SPRITE_SIZE;
  const nextTileY = nextPosition[1] / SPRITE_SIZE;
  // we retrieve the value of this tile
  const nextTileValue = tiles[nextTileY][nextTileX];
  // if its value is higner than 5, it's impassable, so the player stays
  // where he was
  if (nextTileValue > 5) {
    return oldPosition;
  }
  // otherwise he goes to the next position
  return nextPosition;
};
