import { createStore, combineReducers, applyMiddleware } from 'redux';
import appReducer from './src/reducers/appReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './src/sagas';

const rootReducer = combineReducers(
  { app: appReducer }
);

const sagaMiddleware = createSagaMiddleware();


const configStore = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
  )
);

sagaMiddleware.run(rootSaga);

export default configStore;
