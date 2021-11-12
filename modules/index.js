import {all} from 'redux-saga/effects';
import {combineReducers} from 'redux';
// import {LocalStorageSaga} from './localStorage';
import loadingReducer from './loading';
import errorReducer from './error';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
