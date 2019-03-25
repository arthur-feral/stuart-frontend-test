import { DOM_LOADED } from './actionsTypes';

const initialState = {
  domLoaded: false,
};

export default (state = initialState, action = {}) => {
  const {
    type,
  } = action;

  switch (type) {
    case DOM_LOADED:
      return {
        ...state,
        domLoaded: true,
      };

    default:
      return state;
  }
};
