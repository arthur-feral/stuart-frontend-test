import {
  TOAST_HIDE,
} from './actionsTypes';
import { POST_JOBS_SUCCEEDED } from '../actionsTypes';

const initialState = {
  isVisible: false,
};

export default (state = initialState, action = {}) => {
  const {
    type,
  } = action;

  switch (type) {
    case POST_JOBS_SUCCEEDED: {
      return {
        ...state,
        isVisible: true,
      };
    }

    case TOAST_HIDE: {
      return {
        ...state,
        isVisible: false,
      };
    }

    default:
      return state;
  }
};
