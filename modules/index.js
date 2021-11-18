import {all} from 'redux-saga/effects';
import {combineReducers} from 'redux';
import loadingReducer from './loading';
import errorReducer from './error';
import accountReducer, {AccountSaga} from './account';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  accountReducer,
});

export function* rootSaga() {
  yield all([AccountSaga()]);
}

export default rootReducer;
