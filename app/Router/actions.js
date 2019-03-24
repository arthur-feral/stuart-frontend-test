import {
  ROUTER_FROM_FIELD_CHANGED,
  ROUTER_TO_FIELD_CHANGED,
} from './actionsTypes';

export const fromFieldChanged = from => ({
  type: ROUTER_FROM_FIELD_CHANGED,
  payload: {
    from,
  },
});

export const toFieldChanged = to => ({
  type: ROUTER_TO_FIELD_CHANGED,
  payload: {
    to,
  },
});

