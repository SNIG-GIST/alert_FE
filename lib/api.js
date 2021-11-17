import axios from 'axios';
import {Platform} from 'react-native';

// export const baseURL =
// Platform.OS === 'android' ? 'http://10.0.0.2:3000' : 'http://localhost:3000';
export const domain = 'https://api.jisungin-snig.com';

export const postSendMail = (email, isRegistered) => {
  return axios.post(`${domain}/account/test`, {
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
