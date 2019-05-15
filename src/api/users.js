import { http } from './client';

export const getReadingStats = async username => {
  return await http.get(`/users/profiles/${username}/stats`);
};
