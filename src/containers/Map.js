// npm imports
import { connect } from 'react-redux';

// local imports
import Map from '../components/Map';

// state
const mapStateToProps = (state) => ({
  tiles: state.game.tiles,
});

// actions
const mapDispatchToProps = {};

// export
export default connect(mapStateToProps, mapDispatchToProps)(Map);
