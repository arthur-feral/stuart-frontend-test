import {
  ROUTER_CREATE_JOB_FAILED,
  ROUTER_CREATE_JOB_REQUESTED, ROUTER_CREATE_JOB_SUCCEEDED,
  ROUTER_ADDRESS_FIELD_CHANGED,
} from './actionsTypes';

export const addressFieldChanged = (type, address) => ({
  type: ROUTER_ADDRESS_FIELD_CHANGED,
  payload: {
    type,
    address,
  },
});

export const createJobRequested = () => ({
  type: ROUTER_CREATE_JOB_REQUESTED,
});

export const createJobSucceeded = () => ({
  type: ROUTER_CREATE_JOB_SUCCEEDED,
});

export const createJobFailed = () => ({
  type: ROUTER_CREATE_JOB_FAILED,
});
