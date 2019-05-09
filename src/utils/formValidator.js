export function checkAllEmptyInputs(userCredentials) {
  const emptyFields = [];
  Object.keys(userCredentials).forEach(key => {
    if (userCredentials[key].trim() === '') {
      document.querySelector(`input[name=${key}]`).classList.add('error');
      emptyFields.push(key);
    } else {
      document.querySelector(`input[name=${key}]`).classList.remove('error');
      emptyFields.splice(emptyFields.indexOf(emptyFields[key]), 1);
    }
  });
  return emptyFields;
}

export function fieldChecker(event) {
  const { target } = event;
  if (target.value === '') {
    return document
      .querySelector(`input[name=${target.name}]`)
      .classList.add('error');
  }
  return document
    .querySelector(`input[name=${target.name}]`)
    .classList.remove('error');
}

export function validateInput(userCredentials) {
  const validationErrors = [];
  if (userCredentials['username'].trim().length < 3) {
    document.querySelector('input[name="username"]').classList.add('error');
    validationErrors.push('username must be at least 3 characters');
  }

  if (userCredentials['password'].trim().length < 8) {
    document.querySelector('input[name="password"]').classList.add('error');
    validationErrors.push('password must be at least 8 characters');
  }

  if (!userCredentials['password'].match(/^([a-zA-Z0-9]+)$/)) {
    document.querySelector('input[name="password"]').classList.add('error');
    validationErrors.push('password can only contain alphanumerics');
  }

  if (
    !userCredentials['email']
      .trim()
      .match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      )
  ) {
    document.querySelector('input[name="email"]').classList.add('error');
    validationErrors.push('email must be a valid email');
  }
  return validationErrors;
}
