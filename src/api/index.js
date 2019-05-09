import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://zinnia-ah-backend-staging.herokuapp.com/api/v1',
});

export const setToken = token => {
  if (getToken()) {
    destroyToken();
  }
  localStorage.setItem('token', JSON.stringify(token));
  return getToken();
};

export const getToken = () => {
  const token = localStorage.getItem('token');
  return JSON.parse(token);
};

export const destroyToken = () => {
  localStorage.removeItem('token');
  return null;
};
