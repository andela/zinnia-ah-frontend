/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
export default function validator(userCredentials) {
  const validationErrors = [];
  Object.keys(userCredentials).forEach(key => {
    if (userCredentials[key] === '') {
      validationErrors.push(`${key} cannot be empty`);
    }
  });
  return validationErrors;
}
