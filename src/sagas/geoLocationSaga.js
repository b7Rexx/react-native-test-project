import { takeLatest, put, take } from 'redux-saga/effects';
import SearchService from '../services/search.service';
import { FETCH_BY_GEOLOCATION, FETCH_BY_GEOLOCATION_ASYNC } from '../api/constants';

function* fetchGeoLocation() {
  try {
    const data = yield SearchService.getGeolocationCurrentPosition().then((response) => { return response });
    yield put({
      type: FETCH_BY_GEOLOCATION_ASYNC,
      payload: data,
    });
  }
  catch (error) {
    console.log(error);
    yield put({
      type: FETCH_BY_GEOLOCATION_ASYNC,
      payload: {},
    });
  }
};
export function* watchGeoLocation() {
  yield takeLatest(FETCH_BY_GEOLOCATION, fetchGeoLocation);
};
