import axios from 'axios';
import { getToken } from '../utils/helpers';

let Authorization;
if (getToken()) {
  Authorization = { Authorization: getToken() };
}

export const http = axios.create({
  baseURL: 'https://zinnia-ah-backend-staging.herokuapp.com/api/v1',
  headers: {
    ...Authorization,
  },
});
