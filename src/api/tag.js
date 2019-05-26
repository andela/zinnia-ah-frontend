import { http } from './client';

export const getAllTagsRequest = async () => {
  return await http.get(`/search/tags`);
};

export const getAllArticlesByTagRequest = async name => {
  return await http.get(`/search/tags/${name}`);
};
