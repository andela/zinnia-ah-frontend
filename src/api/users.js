import { http } from './client';
import { getToken } from './helpers';

export const getReadingStats = async username => {
  let token = getToken();
  return await http.get(`/users/profiles/${username}/stats`, {
    headers: { Authorization: JSON.parse(token) },
  });
};
