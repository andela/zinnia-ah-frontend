import axios from 'axios';
import { getToken } from '../utils/helpers';

export const http = axios.create({
  baseURL: 'https://zinnia-ah-backend-staging.herokuapp.com/api/v1',
  headers: {
    Authorization: getToken(),
  },
});
