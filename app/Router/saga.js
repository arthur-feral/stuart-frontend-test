import {
  put,
  take,
  debounce,
  takeEvery,
  select,
} from 'redux-saga/effects';
import { DOM_LOADED } from '../actionsTypes';
import {
  ROUTER_ADDRESS_FIELD_CHANGED,
  ROUTER_CREATE_JOB_REQUESTED,
} from './actionsTypes';
import { postGeocodeRequested, postJobsRequested } from '../actions';
import { getDropOff, getPickUp, isCreating } from './selectors';

function* searchAddress(action) {
  const {
    payload,
  } = action;

  yield put(postGeocodeRequested(payload.type, payload.address));
}

function* createJob() {
  const isCreatingJob = yield select(isCreating);
  console.log(isCreatingJob);
  if (!isCreatingJob) {
    const pickUp = yield select(getPickUp);
    const dropOff = yield select(getDropOff);
    yield put(postJobsRequested(
      pickUp,
      dropOff,
    ));
  }
}

export default function* routerSaga() {
  yield take(DOM_LOADED);

  takeEvery(
    ROUTER_CREATE_JOB_REQUESTED,
    createJob,
  );

  yield debounce(
    200,
    ROUTER_ADDRESS_FIELD_CHANGED,
    searchAddress,
  );
}
