import { connect } from 'react-redux';
import Router from './Router';
import {
  fromFieldChanged,
  toFieldChanged,
} from './actions';
import {
  getFromAddress,
  isFromInvalid,
  getToAddress,
  isToInvalid,
  isCreating,
} from './selectors';

const mapStateToProps = (state, props) => ({
  ...props,
  from: getFromAddress(state),
  isFromInvalid: isFromInvalid(state),
  to: getToAddress(state),
  isToInvalid: isToInvalid(state),
  isCreating: isCreating(state),
});

const mapDispatchToProps = {
  onFromChanged: fromFieldChanged,
  onToChanged: toFieldChanged,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);

export { default as reducer } from './reducer';
