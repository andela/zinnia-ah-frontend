import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://zinnia-ah-backend-staging.herokuapp.com/api/v1',
});
