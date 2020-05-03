import { all, fork } from 'redux-saga/effects';
import { watchFetchOnTrendingFlats, watchFetchOnBestPicks } from './apiSaga';
import { watchGeoLocation } from './geoLocationSaga';
export function* rootSaga() {
  yield all([
    fork(watchFetchOnTrendingFlats),
    fork(watchFetchOnBestPicks),
    fork(watchGeoLocation),
  ]);
};