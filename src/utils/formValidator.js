/**
 * validate inputs
 * usage: const errors = validate({ email: 'user@mail.com', password: 'aNewSecret' }, exitsingErrors);
 */
export const validate = (values, validationErrors) => {
  const newErrors = [];
  const oldErrors = [...validationErrors];
  const keys = Object.keys(values);

  const username = value => {
    if (isFieldEmpty('username', value)) {
      return;
    }

    if (trim(value).length < 3) {
      newErrors.push(lengthError('username', 3));
    } else {
      const index = oldErrors.indexOf(lengthError('username', 3));

      oldErrors.includes(lengthError('username', 3))
        ? oldErrors.splice(index, 1)
        : '';
    }

    if (!trim(value).match(/^([a-zA-Z0-9]+)$/)) {
      newErrors.push(alphanumError('username'));
    } else {
      const index = oldErrors.indexOf(alphanumError('username'));

      oldErrors.includes(alphanumError('username'))
        ? oldErrors.splice(index, 1)
        : '';
    }
  };

  const password = value => {
    if (isFieldEmpty('password', value)) {
      return;
    }

    if (trim(value).length < 8) {
      newErrors.push(lengthError('password', 8));
    } else {
      const index = oldErrors.indexOf(lengthError('password', 8));

      oldErrors.includes(lengthError('password', 8))
        ? oldErrors.splice(index, 1)
        : '';
    }

    if (!trim(value).match(/^([a-zA-Z0-9]+)$/)) {
      newErrors.push(alphanumError('password'));
    } else {
      const index = oldErrors.indexOf(alphanumError('password'));

      oldErrors.includes(alphanumError('password'))
        ? oldErrors.splice(index, 1)
        : '';
    }
  };

  const email = value => {
    if (isFieldEmpty('email', value)) {
      return;
    }

    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const isEmail = trim(value).match(pattern);
    if (!isEmail) {
      newErrors.push(emailError);
    } else {
      const index = oldErrors.indexOf(emailError);

      oldErrors.includes(emailError) ? oldErrors.splice(index, 1) : '';
    }
  };

  const isFieldEmpty = (field, value) => {
    if (trim(value).length < 1) {
      newErrors.push(isRequiredError(field));
      return true;
    }
    const index = oldErrors.indexOf(isRequiredError(field));

    oldErrors.includes(isRequiredError(field))
      ? oldErrors.splice(index, 1)
      : '';

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

  return [...new Set(oldErrors.concat(newErrors))];
};

export const emailError = 'email must be a valid email';

export const alphanumError = field => {
  return `${field} can only contain alphanumerics`;
};

export const isRequiredError = field => {
  return `${field} is required`;
};

export const lengthError = (field, requiredLength) => {
  return `${field} must be at least ${requiredLength} characters long`;
};

export const trim = word => word.replace(/([ ])+/g, '');
