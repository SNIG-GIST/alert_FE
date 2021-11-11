import {all} from 'redux-saga/effects';
import {combineReducers} from 'redux';
// import accountReducer, { AccountSaga } from "./account";
// import customTagListReducer , {getCustomTagListSaga ,deleteCustomTagSaga} from "./customTag";
import {LocalStorageSaga} from './localStorage';
import loadingReducer from './loading';
import errorReducer from './error';
import localStorageReducer from './localStorage';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  localStorageReducer,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
