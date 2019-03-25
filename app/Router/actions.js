import {
  ROUTER_CREATE_JOB_FAILED,
  ROUTER_CREATE_JOB_REQUESTED, ROUTER_CREATE_JOB_SUCCEEDED,
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

export const createJobRequested = () => ({
  type: ROUTER_CREATE_JOB_REQUESTED,
});

export const createJobSucceeded = () => ({
  type: ROUTER_CREATE_JOB_SUCCEEDED,
});

export const createJobFailed = () => ({
  type: ROUTER_CREATE_JOB_FAILED,
});
