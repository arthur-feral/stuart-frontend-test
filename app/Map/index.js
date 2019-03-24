import { connect } from 'react-redux';
import Map from './Map';
import { isDOMLoaded } from '../selectors';

const mapStateToProps = (state, props) => ({
  ...props,
  isDOMLoaded: isDOMLoaded(state),
});

export default connect(
  mapStateToProps,
)(Map);
