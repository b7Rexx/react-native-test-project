import { all, fork } from 'redux-saga/effects';
import { watchFetchOnHomeApi } from './apiSaga';
import { watchGeoLocation } from './geoLocationSaga';
export function* rootSaga() {
  yield all([
    fork(watchFetchOnHomeApi),
    fork(watchGeoLocation),
  ]);
};
