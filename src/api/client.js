import axios from 'axios';
import { getToken } from './helpers';
import { HOST_URL } from '../config/config';

const http = axios.create({
  baseURL: HOST_URL,
});

http.interceptors.request.use(
  function(config) {
    const token = getToken();
    if (token) config.headers['Authorization'] = token;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);

export { http };
