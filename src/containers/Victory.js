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
  startNewGame: () => {
    dispatch(startNewGame());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(Victory);
