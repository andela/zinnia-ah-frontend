import axios from 'axios';
import { getToken } from '../utils/helpers';

export const http = axios.create({
  baseURL: 'https://zinnia-ah-backend-staging.herokuapp.com/api/v1',
  headers: {
    Authorization: getToken(),
  },
});
<<<<<<< HEAD
=======

export const signUpRequest = async credentials => {
  return await http.post('/auth/signup', credentials);
};

export const socialLoginRequest = provider => {
  return http.get(`/auth/${provider}`);
};
>>>>>>> [feature] setup tests
