import { connect } from 'react-redux';
import Map from './Map';
import { isDOMLoaded } from '../selectors';
import { getDropOff, getPickUp } from '../Router/selectors';

const mapStateToProps = (state, props) => ({
  ...props,
  isDOMLoaded: isDOMLoaded(state),
  pickUp: getPickUp(state),
  dropOff: getDropOff(state),
});

export default connect(
  mapStateToProps,
)(Map);
