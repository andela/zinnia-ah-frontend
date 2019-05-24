import axios from 'axios';
import { getToken } from './helpers';
import { HOST_URL } from '../config/config';

let Authorization;
if (getToken()) {
  Authorization = { Authorization: getToken() };
}

export const http = axios.create({
  baseURL: HOST_URL,
  headers: { ...Authorization },
});
