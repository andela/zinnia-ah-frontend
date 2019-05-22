import axios from 'axios';
import { getToken } from './helpers';

export const http = axios.create({
  baseURL: process.env.HOST_URL,
  headers: {
    Authorization: getToken(),
  },
});
