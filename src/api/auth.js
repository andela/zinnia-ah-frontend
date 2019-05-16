import { http } from './client';

export const signUpRequest = async credentials => {
  return await http.post('/auth/signup', credentials);
};

export const loginRequest = async credentials => {
  return await http.post('/auth/login', credentials);
};
