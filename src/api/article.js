import { http } from './client';
import { getToken } from './helpers';

export const articleRequest = async credentials => {
  const token = getToken();
  return await http.post('/articles', credentials, {
    headers: { 'x-access-token': token },
  });
};

export const fetchArticle = async articleId => {
  return await http.get(`/articles/${articleId}`);
};

export const likeArticleRequest = async action => {
  const token = getToken();
  const articleId = '0aedc83d-5172-4874-bc43-7826e955fccb';
  return await http.post(`/articles/${articleId}/${action}`, {
    headers: { 'x-access-token': token },
  });
};

export const getTrendingArticlesRequest = async () => {
  return await http.get('/articles/trending');
};
