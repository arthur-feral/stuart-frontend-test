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
  from: '',
  pickUp: null,
  fromInvalid: true,
  to: '',
  dropOff: null,
  toInvalid: true,
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
        from: 'an address',
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
            },
          ),
        ),
      ).toEqual({
        ...initialState,
        pickUp: {
          address: 'an address',
        },
        fromInvalid: false,
      });
      expect(
        reducer(
          initialState,
          postGeocodeSucceeded(
            'dropOff',
            {
              address: 'an address',
            },
          ),
        ),
      ).toEqual({
        ...initialState,
        dropOff: {
          address: 'an address',
        },
        toInvalid: false,
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
        fromInvalid: true,
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
        toInvalid: true,
      });
    });
  });
});
