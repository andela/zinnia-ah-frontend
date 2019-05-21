import { http } from './client';

export const fetchArticlePaginationRequest = async pageNo => {
  return await http.get(`/articles?page=${pageNo}`);
};
