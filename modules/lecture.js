import {getLectureSearch} from '../lib/api';
import {alertError, alertSuccess} from './error';
import {startLoading, finishLoading} from './loading';
import {call, put, takeEvery} from 'redux-saga/effects';

const GET_LECTURE_SEARCH = 'lecture/GET_LECTURE_SEARCH';
const GET_LECTURE_SEARCH_SUCCESS = 'lecture/GET_LECTURE_SEARCH_SUCCESS';
const GET_LECTURE_SEARCH_FAILURE = 'lecture/GET_LECTURE_SEARCH_FAILURE';

export const lectureSearch = (
  userToken,
  year,
  semester,
  day,
  department,
  keyword,
  start_idx,
) => ({
  type: GET_LECTURE_SEARCH,
  userToken: userToken,
  year: year,
  semester: semester,
  day: day,
  department: department,
  keyword: keyword,
  start_idx: start_idx,
});

function* lectureSearchSaga(action) {
  yield put(startLoading(GET_LECTURE_SEARCH));
  try {
    const response = yield call(
      getLectureSearch,
      action.userToken,
      action.year,
      action.semester,
      action.day,
      action.department,
      action.keyword,
      action.start_idx,
    );
    const data = response.data;
    yield put(alertSuccess(GET_LECTURE_SEARCH));
    yield put({type: GET_LECTURE_SEARCH_SUCCESS, payload: data});
  } catch (e) {
    yield put(alertError(GET_LECTURE_SEARCH, e));
    yield put({type: GET_LECTURE_SEARCH_FAILURE, error: e});
  }
}

export function* LectureSaga() {
  yield takeEvery(GET_LECTURE_SEARCH, lectureSearchSaga);
}

const initialState = {};
export default function lectureReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LECTURE_SEARCH_SUCCESS:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
}
