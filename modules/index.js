import {all} from 'redux-saga/effects';
import {combineReducers} from 'redux';
import loadingReducer from './loading';
import errorReducer from './error';
import accountReducer, {AccountSaga} from './account';
import lectureReducer, {LectureSaga} from './lecture';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  accountReducer,
  lectureReducer,
});

export function* rootSaga() {
  yield all([AccountSaga(), LectureSaga()]);
}

export default rootReducer;
