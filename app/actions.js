import {
  DOM_LOADED,
  POST_GEOCODE_REQUESTED,
  POST_GEOCODE_SUCCEEDED,
  POST_GEOCODE_FAILED,
  POST_JOBS_REQUESTED,
  POST_JOBS_SUCCEEDED,
  POST_JOBS_FAILED,
} from './actionsTypes';

export const domLoaded = () => ({
  type: DOM_LOADED,
});

export const postGeocodeRequested = (type, address) => ({
  type: POST_GEOCODE_REQUESTED,
  payload: {
    type,
    address,
  },
});

/**
 *
 * @param {string} type can be pickUp of dropOff
 * @param {object} result
 * @return {{type: string, payload: {type: *, result: *}}}
 */
export const postGeocodeSucceeded = (type, result) => ({
  type: POST_GEOCODE_SUCCEEDED,
  payload: {
    type,
    result,
  },
});

export const postGeocodeFailed = type => ({
  type: POST_GEOCODE_FAILED,
  payload: {
    type,
  },
});

export const postJobsRequested = (pickUp, dropOff) => ({
  type: POST_JOBS_REQUESTED,
  payload: {
    pickUp,
    dropOff,
  },
});

export const postJobsSucceeded = result => ({
  type: POST_JOBS_SUCCEEDED,
  payload: {
    result,
  },
});

export const postJobsFailed = () => ({
  type: POST_JOBS_FAILED,
});
