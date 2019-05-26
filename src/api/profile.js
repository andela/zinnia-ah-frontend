import { http } from './client';

export const getProfileRequest = async username => {
  return await http.get(`/users/profiles/${username}`);
};

export const deleteArticleRequest = async articleId => {
  return await http.delete(`/articles/${articleId}`);
};

export const getBookmarksRequest = async () => {
  return await http.get(`/users/bookmarks`);
};

export const getPopularAuthorsRequest = async () => {
  return await http.get(`/users/popular-authors`);
};
