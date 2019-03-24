import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  noop,
} from 'lodash';
import styles from './router.m.scss';

const getBadgeName = (name, value, isInvalid) => {
  if (value !== '' && !isInvalid) {
    return `${name}BadgePresent`;
  }

  if (isInvalid) {
    return `${name}BadgeError`;
  }

  return `${name}BadgeBlank`;
};

export default class Router extends React.Component {
  static propTypes = {
    from: PropTypes.string,
    isFromInvalid: PropTypes.bool,
    to: PropTypes.string,
    isToInvalid: PropTypes.bool,
    onFromChanged: PropTypes.func,
    onToChanged: PropTypes.func,
    onClickSubmit: PropTypes.func,
    isCreating: PropTypes.bool,
  };

  static defaultProps = {
    from: '',
    isFromInvalid: false,
    to: '',
    isToInvalid: false,
    onFromChanged: noop,
    onToChanged: noop,
    onClickSubmit: noop,
    isCreating: false,
  };

  onFromChanged = (event) => {
    const {
      onFromChanged,
    } = this.props;

    onFromChanged(event.target.value, event);
  };

  onToChanged = (event) => {
    const {
      onToChanged,
    } = this.props;

    onToChanged(event.target.value, event);
  };

  render() {
    const {
      from,
      isFromInvalid,
      to,
      isToInvalid,
      onClickSubmit,
      isCreating,
    } = this.props;

    const fromIcon = getBadgeName('pickUp', from, isFromInvalid);
    const toIcon = getBadgeName('dropOff', to, isToInvalid);

    const buttonLabel = isCreating
      ? 'Creating...'
      : 'Create Job';
    return (
      <div
        className={styles.router}
      >
        <div className={styles.icons}>
          <img
            className={styles.icon}
            src={`assets/${fromIcon}.svg`}
            alt="pick up icon"
          />
          <img
            className={styles.icon}
            src={`assets/${toIcon}.svg`}
            alt="drop off icon"
          />
        </div>
        <div className={styles.inputs}>
          <div className={styles.inputContainer}>
            <span className={classNames(styles.inputPlaceholder, { [styles.hidden]: from.length !== 0 })}>
              Pick up address
            </span>
            <input
              className={styles.input}
              onChange={this.onFromChanged}
              type="text"
              value={from}
            />
          </div>
          <div className={styles.inputContainer}>
            <span className={classNames(styles.inputPlaceholder, { [styles.hidden]: to.length !== 0 })}>
              Drop off address
            </span>
            <input
              className={styles.input}
              onChange={this.onToChanged}
              type="text"
              value={to}
            />
          </div>
          <button
            type="submit"
            className={classNames(styles.submitButton, { [styles.isCreating]: isCreating })}
            onClick={onClickSubmit}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    );
  }
}
