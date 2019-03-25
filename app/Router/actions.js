import {
  ROUTER_CREATE_JOB_REQUEST,
  ROUTER_ADDRESS_FIELD_CHANGED,
} from './actionsTypes';

export const addressFieldChanged = (type, address) => ({
  type: ROUTER_ADDRESS_FIELD_CHANGED,
  payload: {
    type,
    address,
  },
});

export const createJobRequest = () => ({
  type: ROUTER_CREATE_JOB_REQUEST,
});
