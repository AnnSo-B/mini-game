// npm imports
import { connect } from 'react-redux';

// local imports
import App from '../components/App';
import { handleMovement } from '../actions';

// state
const mapStateToProps = (state) => ({
  victory: state.game.victory,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  handleMovement: (key) => {
    dispatch(handleMovement(key));
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(App);
