import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Memo from '../components/Memo';
import {getLocalStorage, setLocalStorage} from '../modules/localStorage';

const MemoContainer = () => {
  const {valueLocalStorage} = useSelector((state, index) => ({
    valueLocalStorage: state.localStorageReducer.value,
  }));
  const dispatch = useDispatch();
  const GetLocalStorage = key => {
    dispatch(getLocalStorage(key));
  };
  const SetLocalStorage = (key, value) => {
    dispatch(setLocalStorage(key, value));
    console.log('dispatch');
  };

  return (
    <Memo
      valueLocalStorage={valueLocalStorage}
      GetLocalStorage={GetLocalStorage}
      SetLocalStorage={SetLocalStorage}
    />
  );
};

export default MemoContainer;
