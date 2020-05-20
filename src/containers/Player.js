// npm imports
import { connect } from 'react-redux';

// local imports
import Player from '../components/Player';

// state
const mapStateToProps = (state) => ({
  playerPosition: state.game.position,
  spriteLocation: state.game.spriteLocation,
});

// actions
const mapDispatchToProps = {};

// export
export default connect(mapStateToProps, mapDispatchToProps)(Player);
