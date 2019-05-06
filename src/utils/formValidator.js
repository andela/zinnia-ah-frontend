export default function validator(userCredentials) {
  const validationErrors = [];
  Object.keys(userCredentials).forEach(key => {
    if (userCredentials[key] === '') {
      validationErrors.push(`${key} cannot be empty`);
    }
  });

  if (userCredentials['username'].trim().length < 8) {
    validationErrors.push('username must be at least 8 characters');
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
