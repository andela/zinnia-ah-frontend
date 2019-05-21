import { http } from './client';

export const customSearchRequest = async query => {
  return await http.get('/search?keyword=' + query);
};
