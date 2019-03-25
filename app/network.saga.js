import {
  post,
  parametize,
  parametizeBody,
  parametizeFetch,
} from 'fetsh';
import {
  put,
  call,
  take,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import {
  DOM_LOADED,
  POST_GEOCODE_REQUESTED,
  POST_JOBS_REQUESTED,
} from './actionsTypes';
import {
  POST_GEOCODE,
  POST_JOBS,
} from './routing';
import {
  postGeocodeFailed,
  postGeocodeSucceeded,
  postJobsFailed,
  postJobsSucceeded,
} from './actions';

const fetchParameters = parametizeFetch({
  isCrossDomain: true,
});

function* postGeocode(action) {
  const {
    type,
    address,
  } = action.payload;

  const body = parametizeBody({
    address,
  });
  const parameters = parametize(
    fetchParameters,
    body,
  );
  try {
    const result = yield call(post, POST_GEOCODE, parameters);
    yield put(postGeocodeSucceeded(type, result));
  } catch (error) {
    yield put(postGeocodeFailed(type));
  }
}

function* postJobs(action) {
  const {
    pickUp,
    dropOff,
  } = action.payload;

  const body = parametizeBody({
    pickup: pickUp,
    dropoff: dropOff,
  });
  const parameters = parametize(
    fetchParameters,
    body,
  );
  try {
    const result = yield call(post, POST_JOBS, parameters);
    yield put(postJobsSucceeded(result));
  } catch (error) {
    yield put(postJobsFailed());
  }
}

export default function* networkSaga() {
  yield take(DOM_LOADED);

  yield takeLatest(
    POST_GEOCODE_REQUESTED,
    postGeocode,
  );

  yield takeEvery(
    POST_JOBS_REQUESTED,
    postJobs,
  );
}
