// npm imports
import { connect } from 'react-redux';

// local imports
import Player from '../components/Player';

// state
const mapStateToProps = (state) => ({
  playerPosition: state.player.position,
});

// actions
const mapDispatchToProps = {};

// export
export default connect(mapStateToProps, mapDispatchToProps)(Player);
