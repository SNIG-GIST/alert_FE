import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {sendMail, logIn} from '../modules/account';
import LoginPage from '../pages/Login/LoginPage';
import {useNavigation} from '@react-navigation/native';

const LoginContainer = () => {
  const navigation = useNavigation();
  const {logInError} = useSelector((state, index) => ({
    logInError: state.errorReducer['account/LOG_IN'],
  }));

  const dispatch = useDispatch();
  const SendMail = email => dispatch(sendMail(email, true));
  const LogIn = (email, cert_string) => dispatch(logIn(email, cert_string));

  useEffect(() => {
    const fn = () => {
      console.log(logInError);
      if (logInError === false) navigation.navigate('Schedule_BottomTab');
    };
    fn();
  }, [logInError]);

  return <LoginPage SendMail={SendMail} LogIn={LogIn} />;
};

export default LoginContainer;
