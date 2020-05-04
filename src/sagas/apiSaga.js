import { takeLatest, put } from 'redux-saga/effects';
import ApiService from '../services/api.service';
import HouseService from '../services/house.service';
import { FETCH_HOME_API,FETCH_HOME_API_ASYNC } from '../api/constants';

function* fetchOnHomeApi() {
  console.log('apiSaga > fetchOnHomeApi');
  try {
    const data = yield ApiService.fetchHomeApi().then((response) => { return response.data });
    yield put({
      type: FETCH_HOME_API_ASYNC,
      payload: HouseService.homeApiDefinition(false,data.bestPicks,data.trendingFlats),
    });
  }
  catch (error) {
    console.log(error);
    yield put({
      type: FETCH_HOME_API_ASYNC,
      payload: HouseService.homeApiDefinition(false,[],[]),
    });
  }
};
export function* watchFetchOnHomeApi() {
  yield takeLatest(FETCH_HOME_API, fetchOnHomeApi);
};
