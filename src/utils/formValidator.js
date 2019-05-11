/**
 * validate inputs
 * usage: const errors = validate({ email: 'user@mail.com', password: 'aNewSecret' });
 */
export const validate = values => {
  const validationErrors = [];
  const keys = Object.keys(values);

  const username = value => {
    if (isFieldEmpty('username', value)) {
      return;
    }

    if (trim(value).length < 3) {
      validationErrors.push('username must be at least 3 characters');
    }
  };

  const password = value => {
    if (isFieldEmpty('password', value)) {
      return;
    }

    if (trim(value).length < 8) {
      validationErrors.push('password must be at least 8 characters');
    }

    if (!trim(value).match(/^([a-zA-Z0-9]+)$/)) {
      validationErrors.push('password can only contain alphanumerics');
    }
  };

  const email = value => {
    if (isFieldEmpty('email', value)) {
      return;
    }

    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const isEmail = trim(value).match(pattern);
    if (!isEmail) {
      validationErrors.push('email must be a valid email');
    }
  };

  const isFieldEmpty = (fieldName, value) => {
    if (trim(value).length < 1) {
      validationErrors.push(`${fieldName} is required`);
      return true;
    }
    return false;
  };

  keys.forEach(key => {
    switch (key) {
      case 'username':
        username(values[key]);
        break;

      case 'email':
        email(values[key]);
        break;

      case 'password':
        password(values[key]);
        break;

      default:
        break;
    }
  });

  return validationErrors;
};

export const trim = word => word.replace(/([ ])+/g, '');
