import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  noop,
} from 'lodash';
import styles from './router.m.scss';

const getBadgeName = (name, value, isInvalid) => {
  if (value === '') {
    return `${name}BadgeBlank`;
  }

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
    addressFieldChanged: PropTypes.func,
    onClickSubmit: PropTypes.func,
    isCreating: PropTypes.bool,
  };

  static defaultProps = {
    from: '',
    isFromInvalid: false,
    to: '',
    isToInvalid: false,
    addressFieldChanged: noop,
    onClickSubmit: noop,
    isCreating: false,
  };

  addressFieldChanged = (type, event) => {
    const {
      addressFieldChanged,
    } = this.props;

    addressFieldChanged(type, event.target.value, event);
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
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onClickSubmit();
        }}
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
              onChange={(event) => {
                this.addressFieldChanged('pickUp', event);
              }}
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
              onChange={(event) => {
                this.addressFieldChanged('dropOff', event);
              }}
              type="text"
              value={to}
            />
          </div>
          <button
            type="submit"
            disabled={isCreating || isFromInvalid || isToInvalid}
            className={classNames(styles.submitButton, { [styles.isCreating]: isCreating })}
            onClick={onClickSubmit}
          >
            {buttonLabel}
          </button>
        </div>
      </form>
    );
  }
}
