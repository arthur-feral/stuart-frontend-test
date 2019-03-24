import {
  ROUTER_FROM_FIELD_CHANGED,
  ROUTER_TO_FIELD_CHANGED,
  ROUTER_CREATE_JOB_REQUESTED,
  ROUTER_CREATE_JOB_SUCCEEDED,
  ROUTER_CREATE_JOB_FAILED,
} from './actionsTypes';

const initialState = {
  from: '',
  fromInvalid: false,
  to: '',
  toInvalid: false,
  isCreating: false,
};

export default (state = initialState, action) => {
  const {
    type,
    payload,
  } = action;

  switch (type) {
    case ROUTER_FROM_FIELD_CHANGED: {
      const {
        from,
      } = payload;
      return {
        ...state,
        from,
      };
    }

    case ROUTER_TO_FIELD_CHANGED: {
      const {
        to,
      } = payload;
      return {
        ...state,
        to,
      };
    }

    case ROUTER_CREATE_JOB_REQUESTED: {
      return {
        ...state,
        isCreating: true,
      };
    }

    case ROUTER_CREATE_JOB_SUCCEEDED:
    case ROUTER_CREATE_JOB_FAILED: {
      return {
        ...state,
        isCreating: false,
      };
    }

    default:
      return state;
  }
};
