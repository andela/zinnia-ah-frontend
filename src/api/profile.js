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

export const postFollowAuthor = async (followStatus, username) => {
  const action = followStatus === 'follow' ? http.post : http.delete;
  return await action(`/profiles/${username}/${followStatus}`, {
    params: { username },
  });
};
