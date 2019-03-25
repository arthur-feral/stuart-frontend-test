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
  pickUp: {
    address: '',
    isValid: false,
    lat: null,
    lng: null,
    // address: '29 Rue du 4 Septembr'
  },
  dropOff: {
    address: '',
    isValid: false,
    lat: null,
    lng: null,
    // address: '15 Rue de Bourgogn',
  },
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
        address,
      } = payload;
      return {
        ...state,
        [payload.type]: {
          ...state[payload.type],
          address,
        },
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
        result,
      } = payload;
      return {
        ...state,
        [payload.type]: {
          address: result.address,
          lat: result.latitude,
          lng: result.longitude,
          isValid: true,
        },
      };
    }

    case POST_GEOCODE_FAILED: {
      return {
        ...state,
        [payload.type]: {
          address: state[payload.type].address,
          lat: null,
          lng: null,
          isValid: false,
        },
      };
    }

    default:
      return state;
  }
};
