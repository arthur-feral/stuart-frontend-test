import reducer from './reducer';
import {
  addressFieldChanged,
} from './actions';
import {
  postGeocodeFailed,
  postGeocodeSucceeded,
  postJobsFailed,
  postJobsRequested,
  postJobsSucceeded,
} from '../actions';

const initialState = {
  pickUp: {
    address: '',
    isValid: false,
    lat: null,
    lng: null,
  },
  dropOff: {
    address: '',
    isValid: false,
    lat: null,
    lng: null,
  },
  isCreating: false,
};
describe('Router reducer', () => {
  it('should have an initial state', () => {
    expect(reducer(undefined)).toEqual(initialState);
  });

  describe('ROUTER_ADDRESS_FIELD_CHANGED', () => {
    it('should update from prop', () => {
      expect(reducer(initialState, addressFieldChanged('pickUp', 'an address'))).toEqual({
        ...initialState,
        pickUp: {
          address: 'an address',
          isValid: false,
          lat: null,
          lng: null,
        },
      });
    });
  });

  describe('POST_JOBS_REQUESTED', () => {
    it('should update from prop', () => {
      expect(reducer(initialState, postJobsRequested())).toEqual({
        ...initialState,
        isCreating: true,
      });
    });
  });

  describe('POST_JOB_SUCCEEDED|POST_JOB_FAILED', () => {
    it('should update isCreating prop', () => {
      expect(reducer({
        ...initialState,
        isCreating: true,
      }, postJobsSucceeded())).toEqual({
        ...initialState,
        isCreating: false,
      });

      expect(reducer({
        ...initialState,
        isCreating: true,
      }, postJobsFailed())).toEqual({
        ...initialState,
        isCreating: false,
      });
    });
  });

  describe('POST_GEOCODE_SUCCEEDED', () => {
    it('should update from prop', () => {
      expect(
        reducer(
          initialState,
          postGeocodeSucceeded(
            'pickUp',
            {
              address: 'an address',
              latitude: 42,
              longitude: 2,
            },
          ),
        ),
      ).toEqual({
        ...initialState,
        pickUp: {
          address: 'an address',
          isValid: true,
          lat: 42,
          lng: 2,
        },
      });
      expect(
        reducer(
          initialState,
          postGeocodeSucceeded(
            'dropOff',
            {
              address: 'an address',
              latitude: 42,
              longitude: 2,
            },
          ),
        ),
      ).toEqual({
        ...initialState,
        dropOff: {
          address: 'an address',
          isValid: true,
          lat: 42,
          lng: 2,
        },
      });
    });
  });

  describe('POST_GEOCODE_FAILED', () => {
    it('should update from prop', () => {
      expect(
        reducer(
          initialState,
          postGeocodeFailed(
            'pickUp',
          ),
        ),
      ).toEqual({
        ...initialState,
        pickUp: {
          address: '',
          isValid: false,
          lat: null,
          lng: null,
        },
      });
      expect(
        reducer(
          initialState,
          postGeocodeFailed(
            'dropOff',
          ),
        ),
      ).toEqual({
        ...initialState,
        dropOff: {
          address: '',
          isValid: false,
          lat: null,
          lng: null,
        },
      });
    });
  });
});
