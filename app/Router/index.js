import { connect } from 'react-redux';
import Router from './Router';
import {
  addressFieldChanged,
  createJobRequest,
} from './actions';
import {
  isCreating,
  getDropOff,
  getPickUp,
} from './selectors';

const mapStateToProps = (state, props) => ({
  ...props,
  pickUp: getPickUp(state),
  dropOff: getDropOff(state),
  isCreating: isCreating(state),
});

const mapDispatchToProps = {
  addressFieldChanged,
  onClickSubmit: createJobRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);

export { default as reducer } from './reducer';
export { default as saga } from './saga';
