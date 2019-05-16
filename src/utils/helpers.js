import jwt from 'jsonwebtoken';
import axios from 'axios';

import { CLOUDINARY_API, CLOUD_PRESET } from '../config/config';

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
  formData.append('upload_preset', CLOUD_PRESET);
  formData.append('tags', tag);
  formData.append('file', image);

  const uploadedImage = await axios(CLOUDINARY_API, {
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
