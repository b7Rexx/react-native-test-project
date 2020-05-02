import { takeLatest, put } from 'redux-saga/effects';
import ApiService from '../services/api.service';
import HouseService from '../services/house.service';
import { FETCH_BEST_PICK, FETCH_BEST_PICK_ASYNC, FETCH_TRENDING_FLAT, FETCH_TRENDING_FLAT_ASYNC } from '../api/constants';

function* fetchOnTrendingFlats() {
  try {
    const data = yield ApiService.fetchTrendingFlats().then((response) => { return response.data });
    yield put({
      type: FETCH_TRENDING_FLAT_ASYNC,
      payload: HouseService.trendingFlatDefinition(false, data),
    });
  }
  catch (error) {
    console.log(error);
    yield put({
      type: FETCH_TRENDING_FLAT_ASYNC,
      payload: HouseService.trendingFlatDefinition(false, []),
    });
  }
};
export function* watchFetchOnTrendingFlats() {
  yield takeLatest(FETCH_TRENDING_FLAT, fetchOnTrendingFlats);
};

function* fetchOnBestPicks() {
  try {
    const data = yield ApiService.fetchBestPicks().then((response) => { return response.data });
    yield put({
      type: FETCH_BEST_PICK_ASYNC,
      payload: HouseService.bestPickDefinition(false, data),
    });
  }
  catch (error) {
    console.log(error);
    yield put({
      type: FETCH_BEST_PICK_ASYNC,
      payload: HouseService.bestPickDefinition(false, []),
    });
  }
};
export function* watchFetchOnBestPicks() {
  yield takeLatest(FETCH_BEST_PICK, fetchOnBestPicks);
};
