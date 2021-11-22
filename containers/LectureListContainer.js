import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import LectureList from '../pages/Lecture/LectureList';
import {lectureSearch} from '../modules/lecture';

const LectureListContainer = () => {
  const {userToken, searchResult} = useSelector((state, index) => ({
    searchResult: state.lectureReducer.result,
    userToken: state.accountReducer.userToken,
  }));
  const dispatch = useDispatch();
  const LectureSearch = (year, semester, day, department, keyword, start_idx) =>
    dispatch(
      lectureSearch(
        userToken,
        year,
        semester,
        day,
        department,
        keyword,
        start_idx,
      ),
    );

  return (
    <LectureList SearchResult={searchResult} LectureSearch={LectureSearch} />
  );
};

export default LectureListContainer;
