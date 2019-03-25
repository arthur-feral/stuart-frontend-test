/* global google */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './map.m.scss';

const nantes = { lat: 47.221982, lng: -1.557155 };

export default class Map extends React.Component {
  static propTypes = {
    isDOMLoaded: PropTypes.bool,
  };

  static defaultProps = {
    isDOMLoaded: false,
  };

  constructor() {
    super();

    this.map = null;
    this.mapDOM = React.createRef();
  }

  componentDidUpdate(previousProps) {
    const {
      isDOMLoaded,
    } = this.props;
    if (
      previousProps.isDOMLoaded !== isDOMLoaded
      && isDOMLoaded
    ) {
      this.map = new google.maps.Map(
        document.getElementById('mapDOMID'),
        {
          zoom: 12,
          center: nantes,
          disableDefaultUI: true,
        },
      );
    }
  }

  render() {
    return (
      <div
        id="mapDOMID"
        className={styles.map}
        ref={this.mapDOM}
      />
    );
  }
}
