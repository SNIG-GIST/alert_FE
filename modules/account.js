import {postSendMail, postSignup, postLogIn} from '../lib/api';
import {alertError, alertSuccess} from './error';
import {startLoading, finishLoading} from './loading';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

const SEND_MAIL = 'account/SEND_MAIL';
const SEND_MAIL_SUCCESS = 'account/SEND_MAIL_SUCCESS';
const SEND_MAIL_FAILURE = 'account/SEND_MAIL_FAILURE';

const SIGN_UP = 'account/SIGNUP';
const SIGN_UP_SUCCESS = 'account/SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'account/SIGN_UP_FAILURE';

const LOG_IN = 'account/LOG_IN';
const LOG_IN_SUCCESS = 'account/LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'account/LOG_IN_FAILURE';

export const sendMail = (email, isRegistered) => ({
  type: SEND_MAIL,
  email: email,
  isRegistered: isRegistered,
});
export const signUp = (name, email, cert_string) => ({
  type: SIGN_UP,
  name: name,
  email: email,
  cert_string: cert_string,
});

function* sendMailSaga(action) {
  try {
    const response = yield call(
      postSendMail,
      action.email,
      action.isRegistered,
    );
    yield put(alertSuccess(SEND_MAIL));
    yield put({type: SEND_MAIL_SUCCESS, payload: response.status});
  } catch (e) {
    yield put({type: SEND_MAIL_FAILURE, error: e});
    yield put(alertError(SEND_MAIL, e));
  }
}
function* signUpSaga(action) {
  try {
    const response = yield call(
      postSignup,
      action.name,
      action.email,
      action.cert_string,
    );
    yield put(alertSuccess(SIGN_UP));
    yield put({type: SIGN_UP_SUCCESS, payload: response});
  } catch (e) {
    yield put({type: SIGN_UP_FAILURE, error: e});
    yield put(alertError(SIGN_UP, e));
  }
}

export function* AccountSaga() {
  yield takeLatest(SEND_MAIL, sendMailSaga);
  yield takeLatest(SIGN_UP, signUpSaga);
}

const initialState = {};
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MAIL_SUCCESS:
      return {
        ...state,
        status: action.payload,
      };
    case SEND_MAIL_FAILURE:
      return {
        ...state,
        status: action.error,
      };
    default:
      return state;
  }
}
