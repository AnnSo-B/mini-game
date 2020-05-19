// npm imports
import { connect } from 'react-redux';

// local imports
import App from '../components/App';
import { handleMovement } from '../actions';

// state
const mapStateToProps = null;

// actions
const mapDispatchToProps = (dispatch) => ({
  handleMovement: (key) => {
    console.log(key);
    dispatch(handleMovement(key));
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(App);
