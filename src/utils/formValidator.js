export function checkAllEmptyInputs(userCredentials) {
  const emptyFields = [];
  Object.keys(userCredentials).forEach(key => {
    userCredentials[key].replace(/([ ])+/g, '') === ''
      ? emptyFields.push(key)
      : '';
  });
  return emptyFields;
}

export function fieldChecker(event, currentEmptyFields) {
  const emptyFields = [...currentEmptyFields];
  const { target } = event;
  const trimmed = target.value.replace(/([ ])+/g, '');
  if (trimmed !== '') {
    const index = emptyFields.indexOf(target.name);
    emptyFields.splice(index, 1);
    return emptyFields;
  }
  emptyFields.push(target.name);
  return emptyFields;
}

export function validateInput(userCredentials) {
  const validationErrors = [];
  if (userCredentials['username'].trim().length < 3) {
    validationErrors.push('username must be at least 3 characters');
  }

  if (userCredentials['password'].trim().length < 8) {
    validationErrors.push('password must be at least 8 characters');
  }

  if (!userCredentials['password'].match(/^([a-zA-Z0-9]+)$/)) {
    validationErrors.push('password can only contain alphanumerics');
  }

  if (
    !userCredentials['email']
      .trim()
      .match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      )
  ) {
    validationErrors.push('email must be a valid email');
  }
  return validationErrors;
}
