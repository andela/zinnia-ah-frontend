import jwt from 'jsonwebtoken';
import axios from 'axios';

import { CREATE_ARTICLE_CLOUDINARY_URL } from '../config/config.js';

export const decodeToken = token => {
  return jwt.decode(token);
};

export function setToken(token) {
  if (getToken()) {
    destroyToken();
  }
  localStorage.setItem('token', token);
}

export function getToken() {
  const token = localStorage.getItem('token');
  return token;
}

export const destroyToken = () => {
  return localStorage.removeItem('token');
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

export const uploadImageToServer = ({ image, tag }, callback) => async () => {
  const formData = new FormData();
  formData.append('upload_preset', process.env.CLOUD_PRESET);
  formData.append('tags', tag);
  formData.append('file', image);

  const uploadedImage = await axios(process.env.CLOUDINARY_API, {
    method: 'POST',
    data: formData,
  });
  if (uploadedImage.status === 200) {
    return callback(null, uploadedImage.data.secure_url);
  }
  return callback(true, 'Please try, uploading the image again');
};

export const handleImageEventClick = () => {
  return document.querySelector('input[name=upload_profile_picture]').click();
};

export const imageHandler = async file => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'zinniahteam');

  const data = await axios.post(CREATE_ARTICLE_CLOUDINARY_URL, formData, {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  return data;
};

export const setItem = (key, value) => localStorage.setItem(key, value);

export const getItem = key => localStorage.getItem(key);

export const removeItem = key => localStorage.removeItem(key);
