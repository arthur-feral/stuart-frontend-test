/* global google */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './map.m.scss';
import { MAP_INITIAL_ZOOM } from '../constants';

const nantes = { lat: 47.221982, lng: -1.557155 };
const placePtopType = PropTypes.shape({
  address: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
});

const getPosition = place => ({
  lat: place.latitude,
  lng: place.longitude,
});

export default class Map extends React.Component {
  static propTypes = {
    isDOMLoaded: PropTypes.bool,
    pickUp: placePtopType,
    dropOff: placePtopType,
  };

  static defaultProps = {
    isDOMLoaded: false,
    pickUp: null,
    dropOff: null,
  };

  constructor() {
    super();

    this.map = null;
    this.pickUp = new google.maps.Marker({
      icon: 'assets/pickUpMarker.svg',
    });
    this.dropOff = new google.maps.Marker({
      icon: 'assets/dropOffMarker.svg',
    });
    this.mapDOM = React.createRef();
  }

  componentDidUpdate(previousProps) {
    const {
      isDOMLoaded,
      pickUp,
      dropOff,
    } = this.props;
    if (
      previousProps.isDOMLoaded !== isDOMLoaded
      && isDOMLoaded
    ) {
      this.map = new google.maps.Map(
        document.getElementById('mapDOMID'),
        {
          zoom: MAP_INITIAL_ZOOM,
          center: nantes,
          disableDefaultUI: true,
        },
      );
    }

    if (pickUp) {
      const position = getPosition(pickUp);
      this.pickUp.setPosition(position);
      this.pickUp.setMap(this.map);
    } else {
      this.pickUp.setMap(null);
    }

    if (dropOff) {
      const position = getPosition(dropOff);
      this.dropOff.setPosition(position);
      this.dropOff.setMap(this.map);
      this.map.setCenter(position);
    } else {
      this.dropOff.setMap(null);
    }

    if (
      previousProps.pickUp !== pickUp
      && pickUp
    ) {
      this.map.setCenter(getPosition(pickUp));
    }

    if (
      previousProps.dropOff !== dropOff
      && dropOff
    ) {
      this.map.setCenter(getPosition(dropOff));
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
