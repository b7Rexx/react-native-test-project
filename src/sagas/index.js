import { all, fork } from 'redux-saga/effects';
import { watchFetchOnTrendingFlats, watchFetchOnBestPicks } from './apiSaga';
export function* rootSaga() {
  yield all([
    fork(watchFetchOnTrendingFlats),
    fork(watchFetchOnBestPicks),
  ]);
};