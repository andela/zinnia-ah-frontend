const env = {
  development: {
    CLOUD_USERNAME: 'emmsdan',
    CLOUD_ACTION: 'upload',
  },
  production: {
    CLOUD_USERNAME: 'emmsdan',
    CLOUD_ACTION: 'upload',
  },
  test: {
    CLOUD_USERNAME: 'emmsdan',
    CLOUD_ACTION: 'upload',
  },
};

const envConfig = ()  => {
  const environment = process.env.NODE_ENV !=='' ? process.env.NODE_ENV : 'development';
  return env[environment];
}

export default envConfig;
