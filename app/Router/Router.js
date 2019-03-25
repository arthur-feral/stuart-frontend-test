import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  noop,
} from 'lodash';
import styles from './router.m.scss';

const getBadgeName = (name, value, isValid) => {
  if (value === '') {
    return `${name}BadgeBlank`;
  }

  if (value !== '' && isValid) {
    return `${name}BadgePresent`;
  }

  if (!isValid) {
    return `${name}BadgeError`;
  }

  return `${name}BadgeBlank`;
};

export default class Router extends React.Component {
  static propTypes = {
    pickUp: PropTypes.object.isRequired,
    dropOff: PropTypes.object.isRequired,
    addressFieldChanged: PropTypes.func,
    onClickSubmit: PropTypes.func,
    isCreating: PropTypes.bool,
  };

  static defaultProps = {
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
      pickUp,
      dropOff,
      onClickSubmit,
      isCreating,
    } = this.props;

    const fromIcon = getBadgeName('pickUp', pickUp.address, pickUp.isValid);
    const toIcon = getBadgeName('dropOff', dropOff.address, dropOff.isValid);

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
            <span className={classNames(styles.inputPlaceholder, { [styles.hidden]: pickUp.address.length !== 0 })}>
              Pick up address
            </span>
            <input
              className={styles.input}
              onChange={(event) => {
                this.addressFieldChanged('pickUp', event);
              }}
              type="text"
              value={pickUp.address}
            />
          </div>
          <div className={styles.inputContainer}>
            <span className={classNames(styles.inputPlaceholder, { [styles.hidden]: dropOff.address.length !== 0 })}>
              Drop off address
            </span>
            <input
              className={styles.input}
              onChange={(event) => {
                this.addressFieldChanged('dropOff', event);
              }}
              type="text"
              value={dropOff.address}
            />
          </div>
          <button
            type="submit"
            disabled={isCreating || !pickUp.isValid || !dropOff.isValid}
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
