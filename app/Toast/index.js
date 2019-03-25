import { connect } from 'react-redux';
import Toast from './Toast';
import {
  hideToast,
} from './actions';
import {
  isToastVisible,
} from './selectors';

const mapStateToProps = (state, props) => ({
  ...props,
  isVisible: isToastVisible(state),
});

const mapDispatchToProps = {
  onHide: hideToast,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toast);

export { default as reducer } from './reducer';
