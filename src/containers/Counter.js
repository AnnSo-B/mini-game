// npm imports
import { connect } from 'react-redux';

// local imports
import Counter from '../components/Counter';

// state
const mapStateToProps = (state) => ({
  movementCounter: state.game.movementCounter,
});

// actions
const mapDispatchToProps = {};

// export
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
