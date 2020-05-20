// local imports
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../components/App/config';

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
export const getNextTileValue = (nextPosition, tiles) => {
  // we need to get the coordinate corresponding to the next position
  // the new position is a pixel size so we need to divide it by the
  // sprite size to get the coordinate in the map
  const nextTileX = nextPosition[0] / SPRITE_SIZE;
  const nextTileY = nextPosition[1] / SPRITE_SIZE;
  // we retrieve the value of this tile
  const nextTileValue = tiles[nextTileY][nextTileX];

  return nextTileValue;
};

// determine which sprite we'll be displayed next according to player's movement
export const getSpriteLocation = (oldSpriteLocation, direction, walkIndex) => {
  let spriteLocation = '';

  switch (direction) {
    case 'ArrowDown':
      spriteLocation = `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
      break;
    case 'ArrowRight':
      spriteLocation = `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
      break;
    case 'ArrowLeft':
      spriteLocation = `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;
      break;
    case 'ArrowUp':
      spriteLocation = `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;
      break;
    default:
      spriteLocation = oldSpriteLocation;
      break;
  }
  return spriteLocation;
};
