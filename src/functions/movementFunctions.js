// local imports
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../components/App/config';

// functions
const getNextPosition = (oldPosition, direction) => {
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
  console.log(nextPosition);
  return nextPosition;
};

// export
export default getNextPosition;
