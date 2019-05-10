import {
  checkAllEmptyFields,
  fieldChecker,
  validateInput,
} from './formValidator';

describe('checkAllEmptyFields', () => {
  const emptyUserCredentials = { email: '', password: '', username: '' };

  it('returns an array containing all empty fields', () => {
    expect(typeof checkAllEmptyFields).toBe('function');
    const emptyFields = checkAllEmptyFields(emptyUserCredentials);
    expect(emptyFields).toBeInstanceOf(Array);
    expect(emptyFields.length).toBe(3);
    expect(emptyFields).toEqual(Object.keys(emptyUserCredentials));
  });

  const validUserCredentials = {
    email: 'igbominadeveloper@ah.com',
    password: 'password1',
    username: 'igbominadeveloper',
  };
  it('returns an empty array', () => {
    expect(typeof checkAllEmptyFields).toBe('function');
    const emptyFields = checkAllEmptyFields(validUserCredentials);
    expect(emptyFields).toBeInstanceOf(Array);
    expect(emptyFields.length).toBe(0);
    expect(emptyFields).toEqual([]);
  });
});

describe('fieldChecker', () => {
  it('removes existing value from the current empty fields', () => {
    const event = { target: { value: 'password1', name: 'password' } };
    const currentEmptyFields = ['email', 'password'];
    const emptyFields = fieldChecker(event, currentEmptyFields);
    expect(typeof fieldChecker).toBe('function');
    expect(emptyFields.length).toBe(1);
    expect(emptyFields).toEqual(['email']);
  });

  it('sets an empty field to the list of empty fields', () => {
    const event = { target: { value: '', name: 'password' } };
    const currentEmptyFields = ['email', 'username'];
    const emptyFields = fieldChecker(event, currentEmptyFields);
    expect(typeof fieldChecker).toBe('function');
    expect(emptyFields.length).toBe(3);
    expect(emptyFields).toEqual(['email', 'username', 'password']);
  });
});

describe('validateInput', () => {
  it('returns an array of validation errors', () => {
    expect(typeof validateInput).toBe('function');
    const invalidUserCredentials = {
      email: 'igbominadeveloperm',
      password: 'password1',
      username: 'igbominadeveloper',
    };
    const invalidInputs = validateInput(invalidUserCredentials);
    expect(invalidInputs.length).toBe(1);
    expect(invalidInputs[0].includes('email')).toBe(true);
  });

  it('returns an empty array when there are no validation errors', () => {
    expect(typeof validateInput).toBe('function');
    const invalidUserCredentials = {
      email: 'igbominadeveloper@ah.com',
      password: 'password1',
      username: 'igbominadeveloper',
    };
    const invalidInputs = validateInput(invalidUserCredentials);
    expect(invalidInputs.length).toBe(0);
    expect(invalidInputs).toEqual([]);
  });
});
