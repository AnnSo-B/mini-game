// action types
export const HANDLE_MOVEMENT = 'HANDLE_MOVEMENT';
export const START_NEW_GAME = 'START_NEW_GAME';

// action creators
export const handleMovement = (payload) => ({
  type: HANDLE_MOVEMENT,
  payload,
});

export const startNewGame = (payload) => ({
  type: START_NEW_GAME,
  payload,
});
