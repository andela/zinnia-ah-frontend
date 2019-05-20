/**
 * validate inputs
 * usage: const errors = validate({ email: 'user@mail.com', password: 'aNewSecret' }, exitsingErrors);
 */
export const validate = (values, validationErrors) => {
  const newErrors = [];
  const oldErrors = [...validationErrors];
  const keys = Object.keys(values);
  const username = usernameExistenceCheck(isFieldEmpty, newErrors, oldErrors);
  const password = passwordExistenceCheck(isFieldEmpty, newErrors, oldErrors);
  const email = emailExistenceCheck(isFieldEmpty, newErrors, oldErrors);

  function isFieldEmpty(field, value) {
    if (trim(value).length < 1) {
      newErrors.push(isRequiredError(field));
      return true;
    }
    removeError(oldErrors, field);

    return false;
  }

  checkEachField(keys, username, values, email, password);

  return [...new Set(oldErrors.concat(newErrors))];
};

export const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

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
function removeError(oldErrors, field) {
  const index = oldErrors.indexOf(isRequiredError(field));
  oldErrors.includes(isRequiredError(field)) ? oldErrors.splice(index, 1) : '';
}

const checkEachField = (keys, username, values, email, password) => {
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
};

const emailExistenceCheck = (isFieldEmpty, newErrors, oldErrors) => {
  return value => {
    if (isFieldEmpty('email', value)) {
      return;
    }
    const isEmail = trim(value).match(emailRegex);
    getEmailError(isEmail, newErrors, oldErrors);
  };
};

const getEmailError = (isEmail, newErrors, oldErrors) => {
  if (!isEmail) {
    newErrors.push(emailError);
  } else {
    const index = oldErrors.indexOf(emailError);
    oldErrors.includes(emailError) ? oldErrors.splice(index, 1) : '';
  }
};

const passwordExistenceCheck = (isFieldEmpty, newErrors, oldErrors) => {
  return value => {
    if (isFieldEmpty('password', value)) {
      return;
    }
    passwordLengthCheck(value, newErrors, oldErrors);
    passwordAlphanumCheck(value, newErrors, oldErrors);
  };
};

const passwordLengthCheck = (value, newErrors, oldErrors) => {
  if (trim(value).length < 8) {
    newErrors.push(lengthError('password', 8));
  } else {
    const index = oldErrors.indexOf(lengthError('password', 8));
    oldErrors.includes(lengthError('password', 8))
      ? oldErrors.splice(index, 1)
      : '';
  }
};

const passwordAlphanumCheck = (value, newErrors, oldErrors) => {
  if (!trim(value).match(/^([a-zA-Z0-9]+)$/)) {
    newErrors.push(alphanumError('password'));
  } else {
    const index = oldErrors.indexOf(alphanumError('password'));
    oldErrors.includes(alphanumError('password'))
      ? oldErrors.splice(index, 1)
      : '';
  }
};

const usernameExistenceCheck = (isFieldEmpty, newErrors, oldErrors) => {
  return value => {
    if (isFieldEmpty('username', value)) {
      return;
    }
    usernameLengthCheck(value, newErrors, oldErrors);
    usernameAlphanumCheck(value, newErrors, oldErrors);
  };
};
const usernameLengthCheck = (value, newErrors, oldErrors) => {
  if (trim(value).length < 3) {
    newErrors.push(lengthError('username', 3));
  } else {
    const index = oldErrors.indexOf(lengthError('username', 3));
    oldErrors.includes(lengthError('username', 3))
      ? oldErrors.splice(index, 1)
      : '';
  }
};

const usernameAlphanumCheck = (value, newErrors, oldErrors) => {
  if (!trim(value).match(/^([a-zA-Z0-9]+)$/)) {
    newErrors.push(alphanumError('username'));
  } else {
    const index = oldErrors.indexOf(alphanumError('username'));
    oldErrors.includes(alphanumError('username'))
      ? oldErrors.splice(index, 1)
      : '';
  }
};
