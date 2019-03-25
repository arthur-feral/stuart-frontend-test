import {
  domLoaded,
  postGeocodeRequested,
  postGeocodeSucceeded,
  postGeocodeFailed,
  postJobsRequested,
  postJobsSucceeded,
  postJobsFailed,
} from './actions';

describe('App actions', () => {
  describe('domLoaded', () => {
    it('should have proper payload', () => {
      expect(domLoaded()).toEqual({
        type: 'DOM_LOADED',
      });
    });
  });

  describe('postGeocodeRequested', () => {
    it('should have proper payload', () => {
      expect(postGeocodeRequested('pickUp', 'an address')).toEqual({
        type: 'POST_GEOCODE_REQUESTED',
        payload: {
          type: 'pickUp',
          address: 'an address',
        },
      });
    });
  });

  describe('postGeocodeSucceeded', () => {
    it('should have proper payload', () => {
      expect(postGeocodeSucceeded('pickUp', {
        address: 'an address',
        lattitude: 48.86982,
        longitude: 2.334579,
      })).toEqual({
        type: 'POST_GEOCODE_SUCCEEDED',
        payload: {
          type: 'pickUp',
          result: {
            address: 'an address',
            lattitude: 48.86982,
            longitude: 2.334579,
          },
        },
      });
    });
  });

  describe('postGeocodeFailed', () => {
    it('should have proper payload', () => {
      expect(postGeocodeFailed()).toEqual({
        type: 'POST_GEOCODE_FAILED',
      });
    });
  });

  describe('postJobsRequested', () => {
    it('should have proper payload', () => {
      expect(postJobsRequested(
        { address: '29 Rue du 4 Septembre', latitude: 48.86982, longitude: 2.334579 },
        { address: '15 Rue de Bourgogne', latitude: 48.8590453, longitude: 2.3180404 },
      )).toEqual({
        type: 'POST_JOBS_REQUESTED',
        payload: {
          pickup: { address: '29 Rue du 4 Septembre', latitude: 48.86982, longitude: 2.334579 },
          dropoff: { address: '15 Rue de Bourgogne', latitude: 48.8590453, longitude: 2.3180404 },
        },
      });
    });
  });

  describe('postJobsSucceeded', () => {
    it('should have proper payload', () => {
      expect(postJobsSucceeded({
        pickup: { address: '29 Rue du 4 Septembre', latitude: 48.86982, longitude: 2.334579 },
        dropoff: { address: '15 Rue de Bourgogne', latitude: 48.8590453, longitude: 2.3180404 },
      })).toEqual({
        type: 'POST_JOBS_SUCCEEDED',
        payload: {
          result: {
            pickup: { address: '29 Rue du 4 Septembre', latitude: 48.86982, longitude: 2.334579 },
            dropoff: { address: '15 Rue de Bourgogne', latitude: 48.8590453, longitude: 2.3180404 },
          },
        },
      });
    });
  });

  describe('postJobsFailed', () => {
    it('should have proper payload', () => {
      expect(postJobsFailed()).toEqual({
        type: 'POST_JOBS_FAILED',
      });
    });
  });
});
