import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';
import {alertError, alertSuccess} from './error';
import {startLoading, finishLoading} from './loading';
import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';

const GET_LOCALSTORAGE = 'localStorage/GET_LOCALSTORAGE';
const GET_LOCALSTORAGE_SUCCESS = 'localStorage/GET_LOCALSTORAGE_SUCCESS';
const GET_LOCALSTORAGE_FAILURE = 'localStorage/GET_LOCALSTORAGE_FAILURE';

const SET_LOCALSTORAGE = 'localStorage/SET_LOCALSTORAGE';
const SET_LOCALSTORAGE_SUCCESS = 'localStorage/SET_LOCALSTORAGE_SUCCESS';
const SET_LOCALSTORAGE_FAILURE = 'localStorage/SET_LOCALSTORAGE_FAILURE';

export const getLocalStorage = key => ({
  type: GET_LOCALSTORAGE,
  key: key,
});
export const setLocalStorage = (key, value) => ({
  type: SET_LOCALSTORAGE,
  key: key,
  value: value,
});
export const clearLocalStorage = async () => {
  const asyncStorageKeys = await AsyncStorage.getAllKeys();
  try {
    if (asyncStorageKeys.length > 0) {
      if (Platform.OS === 'android') {
        await AsyncStorage.clear();
      } else {
        await AsyncStorage.multiRemove(asyncStorageKeys);
      }
      console.log('Clear Done');
    }
    console.log('No Keys');
  } catch (e) {
    console.log(e);
  }
};

function* GetLocalStorageSaga(action) {
  yield put(startLoading(GET_LOCALSTORAGE));
  try {
    const value = yield call(AsyncStorage.getItem, action.key);
    yield put(alertSuccess(GET_LOCALSTORAGE));
    yield put({
      type: GET_LOCALSTORAGE_SUCCESS,
      payload: value,
    });
  } catch (e) {
    yield put({
      type: GET_LOCALSTORAGE_FAILURE,
      payload: e,
      error: true,
    });
    yield put(alertError(GET_LOCALSTORAGE, e));
  }
  yield put(finishLoading(GET_LOCALSTORAGE));
}

function* SetLocalStorageSaga(action) {
  yield put(startLoading(SET_LOCALSTORAGE));
  try {
    yield call(AsyncStorage.setItem, action.key, action.value);
    yield put(alertSuccess(SET_LOCALSTORAGE));
    yield put({
      type: SET_LOCALSTORAGE_SUCCESS,
      localExist: true,
    });
  } catch (e) {
    yield put({
      type: SET_LOCALSTORAGE_FAILURE,
      payload: e,
      error: true,
    });
    yield put(alertError(SET_LOCALSTORAGE, e));
  }
  yield put(finishLoading(GET_LOCALSTORAGE));
}

export function* LocalStorageSaga() {
  takeEvery(SET_LOCALSTORAGE, SetLocalStorageSaga);
  takeEvery(GET_LOCALSTORAGE, GetLocalStorageSaga);
}

const initialState = {
  localExist: false,
  value: '',
};
export default function localStorageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCALSTORAGE_SUCCESS:
      return {
        ...state,
        localExist: true,
      };
    case GET_LOCALSTORAGE_SUCCESS:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}
