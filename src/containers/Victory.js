// npm imports
import { connect } from 'react-redux';

// local imports
import Victory from '../components/Victory';
import { startNewGame } from '../actions';

// state
const mapStateToProps = (state) => ({
  movementCounter: state.game.movementCounter,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  startNewGame: (sameBoard) => {
    dispatch(startNewGame(sameBoard));
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(Victory);
