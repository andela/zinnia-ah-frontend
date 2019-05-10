import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://zinnia-ah-backend-staging.herokuapp.com/api/v1',
});

export const signUpRequest = async credentials => {
  return await http.post('/auth/signup', credentials);
};
