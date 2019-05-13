import jwt from 'jsonwebtoken';

export const decodeToken = token => {
  return jwt.decode(token);
};

export function setToken(token) {
  if (getToken()) {
    destroyToken();
  }
  localStorage.setItem('token', JSON.stringify(token));
}

export function getToken() {
  const token = localStorage.getItem('token');
  return JSON.parse(token);
}

export const destroyToken = () => {
  return localStorage.removeItem('token');
};

export const getUserId = () => {
  return 'no id yet, please specify';
};

export function generateFormData(formElement) {
  const formData = {};
  for (let elem of formElement) {
    if (elem.name !== '') {
      formData[elem.name] = elem.value;
    }
  }
  return formData;
}
