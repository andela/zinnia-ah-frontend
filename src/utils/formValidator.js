export const checkAllEmptyFields = userCredentials => {
  const emptyFields = [];
  Object.keys(userCredentials).forEach(key => {
    trim(userCredentials[key]) === '' ? emptyFields.push(key) : '';
  });
  return emptyFields;
};

export const fieldChecker = (event, currentEmptyFields) => {
  const emptyFields = [...currentEmptyFields];
  const { target } = event;
  if (trim(target.value)) {
    const index = emptyFields.indexOf(target.name);
    emptyFields.splice(index, 1);
    return emptyFields;
  }
  emptyFields.push(target.name);
  return emptyFields;
};

export const validateInput = userCredentials => {
  const validationErrors = [];
  if (trim(userCredentials['username']).length < 3) {
    validationErrors.push('username must be at least 3 characters');
  }

  if (trim(userCredentials['password']).length < 8) {
    validationErrors.push('password must be at least 8 characters');
  }

  if (!trim(userCredentials['password']).match(/^([a-zA-Z0-9]+)$/)) {
    validationErrors.push('password can only contain alphanumerics');
  }

  const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const isEmail = trim(userCredentials['email']).match(pattern);
  if (!isEmail) {
    validationErrors.push('email must be a valid email');
  }
  return validationErrors;
};

export const trim = word => {
  return word.replace(/([ ])+/g, '');
};
