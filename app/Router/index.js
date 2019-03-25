import { connect } from 'react-redux';
import Router from './Router';
import {
  addressFieldChanged,
  createJobRequested,
} from './actions';
import {
  getFromAddress,
  isFromInvalid,
  getToAddress,
  isToInvalid,
  isCreating,
  getDropOff,
  getPickUp,
} from './selectors';

const mapStateToProps = (state, props) => ({
  ...props,
  from: getFromAddress(state),
  pickUp: getPickUp(state),
  isFromInvalid: isFromInvalid(state),
  to: getToAddress(state),
  dropOff: getDropOff(state),
  isToInvalid: isToInvalid(state),
  isCreating: isCreating(state),
});

const mapDispatchToProps = {
  addressFieldChanged,
  onClickSubmit: createJobRequested,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);

export { default as reducer } from './reducer';
export { default as saga } from './saga';
