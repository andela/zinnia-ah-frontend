import jwt from 'jsonwebtoken';

export const decodeToken = token => {
  return jwt.decode(token);
};

export const setToken = token => {
  localStorage.setItem('token', token);
  return getToken();
};

export const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

export const destroyToken = () => {
  localStorage.removeItem('token');
  return null;
};

export const encodeUserObject = (user, expiresIn = '30days') => {
  const encodedUser = jwt.sign(user, process.env.SECRET_KEY, { expiresIn });
  localStorage.setItem('encodedUser', encodedUser);
  return;
};

export const getEncodedUser = () => {
  const encodedUser = localStorage.getItem('encodedUser');
  return decodeToken(encodedUser);
};

export const destroyEncodedUser = () => {
  localStorage.removeItem('encodedUser');
  return null;
}
export const isFollowing = followers => {
  return followers.find(user => user.email === decodeToken(getToken()).email);
};
