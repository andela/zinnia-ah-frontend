import { http } from './client';
import { getToken } from './helpers';

export const articleRequest = async credentials => {
  const token = getToken();
  return await http.post('/articles', credentials, {
    headers: { 'x-access-token': token },
  });
};

export const fetchArticle = async uniqueId => {
  return await http.get(`/articles/${uniqueId}`);
};
