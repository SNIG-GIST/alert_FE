import {
  postSendMail,
  postSignup,
  postLogIn,
  getTokenValidate,
} from '../lib/api';
import {ClearLocalStorage, SetLocalStorage} from '../lib/LocalStorage';
import {alertError, alertSuccess} from './error';
import {startLoading, finishLoading} from './loading';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';

const SEND_MAIL = 'account/SEND_MAIL';
const SEND_MAIL_SUCCESS = 'account/SEND_MAIL_SUCCESS';
const SEND_MAIL_FAILURE = 'account/SEND_MAIL_FAILURE';

const SIGN_UP = 'account/SIGNUP';
const SIGN_UP_SUCCESS = 'account/SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'account/SIGN_UP_FAILURE';

const LOG_IN = 'account/LOG_IN';
const LOG_IN_SUCCESS = 'account/LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'account/LOG_IN_FAILURE';

const TOKEN_VALIDATE = 'account/TOKEN_VALID';
const TOKEN_VALIDATE_SUCCESS = 'account/TOKEN_VALID_SUCCESS';
const TOKEN_VALIDATE_FAILURE = 'account/TOKEN_VALID_FAILURE';

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
export const logIn = (email, cert_string) => ({
  type: LOG_IN,
  email: email,
  cert_string: cert_string,
});
export const tokenValidate = userToken => ({
  type: TOKEN_VALIDATE,
  userToken: userToken,
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
    yield Alert.alert('이메일 발송 성공');
  } catch (e) {
    yield put({type: SEND_MAIL_FAILURE, error: e});
    yield put(alertError(SEND_MAIL, e));
    yield Alert.alert('이메일 발송 실패');
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
    yield Alert.alert('회원가입 성공');
  } catch (e) {
    yield put({type: SIGN_UP_FAILURE, error: e});
    yield put(alertError(SIGN_UP, e));
    yield Alert.alert('회원가입 실패');
  }
}
function* logInSaga(action) {
  try {
    yield ClearLocalStorage('userToken');
    const response = yield call(postLogIn, action.email, action.cert_string);
    const userToken = response.data.token;
    yield SetLocalStorage('userToken', userToken);
    yield put(alertSuccess(LOG_IN));
    yield put({type: LOG_IN_SUCCESS, payload: response.data.token});
    yield Alert.alert('로그인 성공');
  } catch (e) {
    yield put({type: LOG_IN_FAILURE, error: e});
    yield put(alertError(LOG_IN, e));
    yield Alert.alert('로그인 실패');
  }
}
function* tokenValidateSaga(action) {
  yield put(startLoading(TOKEN_VALIDATE));
  try {
    const response = yield call(getTokenValidate, action.userToken);
    yield put(alertSuccess(TOKEN_VALIDATE));
    yield put({
      type: TOKEN_VALIDATE_SUCCESS,
      payload: response.data,
      userToken: action.userToken,
    });
  } catch (e) {
    yield put({type: TOKEN_VALIDATE_FAILURE, error: e});
    yield put(alertError(TOKEN_VALIDATE, e));
  }
  yield put(finishLoading(TOKEN_VALIDATE));
}

export function* AccountSaga() {
  yield takeLatest(SEND_MAIL, sendMailSaga);
  yield takeLatest(SIGN_UP, signUpSaga);
  yield takeLatest(LOG_IN, logInSaga);
  yield takeEvery(TOKEN_VALIDATE, tokenValidateSaga);
}

const initialState = {};
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case TOKEN_VALIDATE_SUCCESS:
      return {
        userToken: action.userToken,
      };
    case TOKEN_VALIDATE_FAILURE:
      return action.error;
    default:
      return state;
  }
}
