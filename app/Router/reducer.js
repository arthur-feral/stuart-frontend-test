import {
  ROUTER_ADDRESS_FIELD_CHANGED,
} from './actionsTypes';
import {
  POST_GEOCODE_FAILED,
  POST_GEOCODE_SUCCEEDED,
  POST_JOBS_REQUESTED,
  POST_JOBS_FAILED,
  POST_JOBS_SUCCEEDED,
} from '../actionsTypes';

const initialState = {
  from: '',
  // from: '29 Rue du 4 Septembr',
  pickUp: null,
  fromInvalid: true,
  to: '',
  // to: '15 Rue de Bourgogn',
  dropOff: null,
  toInvalid: true,
  isCreating: false,
};

export default (state = initialState, action = {}) => {
  const {
    type,
    payload,
  } = action;

  switch (type) {
    case ROUTER_ADDRESS_FIELD_CHANGED: {
      const {
        type,
        address,
      } = payload;
      const place = type === 'pickUp' ? 'from' : 'to';
      return {
        ...state,
        [place]: address,
      };
    }

    case POST_JOBS_REQUESTED: {
      return {
        ...state,
        isCreating: true,
      };
    }

    case POST_JOBS_SUCCEEDED:
    case POST_JOBS_FAILED: {
      return {
        ...state,
        isCreating: false,
      };
    }

    case POST_GEOCODE_SUCCEEDED: {
      const {
        type,
        result,
      } = payload;
      const place = type === 'pickUp' ? 'from' : 'to';
      return {
        ...state,
        [type]: result,
        [`${place}Invalid`]: false,
      };
    }

    case POST_GEOCODE_FAILED: {
      const place = payload.type === 'pickUp' ? 'from' : 'to';
      return {
        ...state,
        [`${place}Invalid`]: true,
      };
    }

    default:
      return state;
  }
};
