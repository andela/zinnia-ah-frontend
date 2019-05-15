import envConfig from '../../.env';
const env = envConfig();

export const HOST_URL =
  'https://zinnia-ah-backend-staging.herokuapp.com/api/v1/';

export const DEFAULT_PROFILE_PICTURE =
  'https://res.cloudinary.com/emmsdan/image/upload/v1557817225/authors-haven/avatar_pupqrh_hylxen.svg';

const IMAGE_API = 'https://api.cloudinary.com/v1_1/';

export const CLOUDINARY_API = `${IMAGE_API}${env.CLOUD_USERNAME}/${
  env.CLOUD_ACTION
}/`;
export const CLOUD_PRESET = 'upload_app';
