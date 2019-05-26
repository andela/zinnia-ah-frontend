import { http } from './client';

export const customSearchRequest = async query => {
  return await http.get('/search?keyword=' + query);
};

export const tagArticlesRequest = async tag => {
  return await http.get('/search/tags/' + tag);
};
