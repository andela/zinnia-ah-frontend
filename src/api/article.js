import { http } from './client';
import axios from 'axios';
import { getToken } from './helpers';
import { HOST_URL } from '../config/config';

export const articleRequest = async credentials => {
  const token = getToken();
  return await http.post('/articles', credentials, {
    headers: { 'x-access-token': token },
  });
};

export const fetchArticle = async articleId =>
  await axios.get(`${HOST_URL}/articles/${articleId}`);

export const likeArticleRequest = async action => {
  const token = getToken();
  const articleId = '0aedc83d-5172-4874-bc43-7826e955fccb';
  return await axios.post(`${HOST_URL}/articles/${articleId}/${action}`, {
    headers: { Authorization: token },
  });
};

export const getTrendingArticlesRequest = async () => {
  return await http.get('/articles/trending');
};
