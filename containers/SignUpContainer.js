import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {sendMail, signUp} from '../modules/account';
import SignupPage from '../pages/Login/SignupPage';

const SignupContainer = () => {
  const {errorSendMail, errorSignUp} = useSelector((state, index) => ({
    errorSendMail: state.errorReducer['account/SEND_MAIL'],
    errorSignUp: state.errorReducer['account/SIGN_UP'],
  }));

  const dispatch = useDispatch();
  const SendMail = email => dispatch(sendMail(email, false));
  const SignUp = (name, email, cert_string) =>
    dispatch(signUp(name, email, cert_string));

  return (
    <SignupPage
      errorSendMail={errorSendMail}
      errorSignUp={errorSignUp}
      SendMail={SendMail}
      SignUp={SignUp}
    />
  );
};

export default SignupContainer;
