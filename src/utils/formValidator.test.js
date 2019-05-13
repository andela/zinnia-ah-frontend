import {
  validate,
  emailError,
  lengthError,
  isRequiredError,
  trim,
  alphanumError,
} from './formValidator';

const validationErrors = [];

describe('checkAllEmptyFields', () => {
  const emptyUserCredentials = { email: '', password: '', username: '' };
  it('returns an array containing all empty fields', () => {
    const emptyFields = validate(emptyUserCredentials, validationErrors);
    expect(emptyFields).toBeInstanceOf(Array);
    expect(emptyFields.length).toBe(3);
    expect(emptyFields.includes(isRequiredError('email'))).toBe(true);
    expect(emptyFields.includes(isRequiredError('username'))).toBe(true);
    expect(emptyFields.includes(isRequiredError('password'))).toBe(true);
  });

  const validUserCredentials = {
    email: 'igbominadeveloper@ah.com',
    password: 'password1',
    username: 'igbominadeveloper',
  };

  it('returns an empty array when all inputs are filled', () => {
    const emptyFields = validate(validUserCredentials, validationErrors);
    expect(emptyFields).toBeInstanceOf(Array);
    expect(emptyFields.length).toBe(0);
    expect(emptyFields.includes(isRequiredError('username'))).toBe(false);
    expect(emptyFields.includes(isRequiredError('email'))).toBe(false);
    expect(emptyFields.includes(isRequiredError('password'))).toBe(false);
  });

  const emailOnly = {
    email: 'johndoe@example.com',
    password: '',
    username: '',
  };

  it('removes existing value from the current empty fields error', () => {
    validationErrors.push(
      'email is required',
      'password is required',
      'password is required',
    );
    const emptyFields = validate(emailOnly, validationErrors);
    expect(emptyFields.length).toBe(2);
    expect(emptyFields.includes('email is required')).toBe(false);
  });
});

describe('validate user input', () => {
  it('returns an array of validation errors', () => {
    validationErrors.length = 0;
    const invalidUserCredentials = {
      username: 'ig',
      password: 'pass',
      email: 'igbominadeveloperm',
    };
    const invalidInputsError = validate(
      invalidUserCredentials,
      validationErrors,
    );
    expect(invalidInputsError.length).toBe(3);
    expect(invalidInputsError.includes(lengthError('username', 3))).toBe(true);
    expect(invalidInputsError.includes(emailError)).toBe(true);
  });
});

describe('Trim function', () => {
  it('trims all spaces', () => {
    const untrimmed = 'I am raw as it comes';
    const trimmed = trim(untrimmed);
    expect(trimmed).toEqual('Iamrawasitcomes');
  });
});

describe('Alphanum Error', () => {
  it('returns a valid message', () => {
    const field = 'username';
    const expectedResponse = `${field} can only contain alphanumerics`;
    const response = alphanumError(field);
    expect(response).toEqual(expectedResponse);
  });
});

describe('Required Field Error', () => {
  it('returns a valid required field error', () => {
    const field = 'username';
    const expectedResponse = `${field} is required`;
    const response = isRequiredError(field);
    expect(response).toEqual(expectedResponse);
  });
});
describe('Field Length Error', () => {
  it('returns a valid field length error', () => {
    const field = 'username';
    const requiredLength = 3;
    const expectedResponse = `${field} must be at least ${requiredLength} characters long`;
    const response = lengthError(field, requiredLength);
    expect(response).toEqual(expectedResponse);
  });
});
