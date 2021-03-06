import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  noop,
} from 'lodash';
import styles from './toast.m.scss';
import { TOASTER_DISAPPEAR_TIMER } from '../constants';

export default class Toast extends React.Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    onHide: PropTypes.func,
  };

  static defaultProps = {
    isVisible: false,
    onHide: noop,
  };

  componentDidUpdate(previousProps) {
    const {
      isVisible,
      onHide,
    } = this.props;
    if (
      previousProps.isVisible !== isVisible
      && isVisible
    ) {
      setTimeout(() => {
        onHide();
      }, TOASTER_DISAPPEAR_TIMER);
    }
  }

  render() {
    const {
      isVisible,
      onHide,
    } = this.props;

    return (
      <button
        type="button"
        className={classNames(styles.toast, { [styles.isVisible]: isVisible })}
        onClick={onHide}
      >
        Job has been created successfully!
      </button>
    );
  }
}
