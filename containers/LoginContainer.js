import React from 'react';
import {useDispatch} from 'react-redux';
import {sendMail, logIn} from '../modules/account';
import LoginPage from '../pages/Login/LoginPage';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const SendMail = email => dispatch(sendMail(email, true));
  const LogIn = (email, cert_string) => dispatch(logIn(email, cert_string));

  return <LoginPage SendMail={SendMail} LogIn={LogIn} />;
};

export default LoginContainer;
