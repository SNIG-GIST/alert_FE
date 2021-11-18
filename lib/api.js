import axios from 'axios';
import {Platform} from 'react-native';

export const domain = 'https://api.jisungin-snig.com';

export const postSendMail = (email, isRegistered) => {
  return axios.post(`${domain}/account/send-mail`, {
    email: email,
    is_registered: isRegistered,
  });
};

export const postSignup = (name, email, cert_string) => {
  return axios.post(`${domain}/account/register`, {
    name: name,
    email: email,
    cert_string: cert_string,
  });
};

export const postLogIn = (email, cert_string) => {
  return axios.post(`${domain}/account/login`, {
    email: email,
    cert_string: cert_string,
  });
};

export const getTokenValidate = userToken => {
  return axios.get(`${domain}/account/token-validate`, {
    headers: {
      Authorization: `Token ${userToken}`,
    },
  });
};
