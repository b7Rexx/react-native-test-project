import { takeLatest, put } from 'redux-saga/effects';
import StorageService from '../services/storage.service';
import { TOGGLE_FAVOURITE, TOGGLE_FAVOURITE_ASYNC } from '../api/constants';

function* updateFavourite() {
  try {
    const data = yield StorageService.getFavourite().then((response) => {
      console.log('TOGGLE_FAVOURITE   >',response);

      return response;
       });
    console.log('TOGGLE_FAVOURITE data  >',data);
    yield put({
      type: TOGGLE_FAVOURITE_ASYNC,
      payload: data
    });
  }
  catch (error) {
    console.log(error);
    yield put({
      type: TOGGLE_FAVOURITE_ASYNC,
      payload: []
    });
  }
};

export function* watchgetFavourite() {
  yield takeLatest(TOGGLE_FAVOURITE, updateFavourite);
};
