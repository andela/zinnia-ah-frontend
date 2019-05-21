import { http } from './client';

export const postStarRating = async (rating, articleId) => {
  return await http.post(`/articles/${articleId}/rate`, {
    rating,
    params: { articleId },
  });
};
