import { validate } from './formValidator';

describe('Form validator: validate()', () => {
  it('detects empty fields', () => {
    const errors = validate({ email: '', password: '', username: '' });
    expect(errors).toBeInstanceOf(Array);
    expect(errors.length).toBe(3);
    expect(errors[0].includes('required')).toBe(true);
  });

  const validUserCredentials = {
    email: 'igbominadeveloper@ah.com',
    password: 'password1',
    username: 'igbominadeveloper',
  };
  it('returns an empty array when there are no validation errors', () => {
    const errors = validate(validUserCredentials);
    expect(errors).toBeInstanceOf(Array);
    expect(errors.length).toBe(0);
    expect(errors).toEqual([]);
  });
  it('returns errors when characters do not have the required length', () => {
    const errors = validate({
      email: 'user@mail.com',
      password: 'pass',
      username: 'me',
    });
    expect(errors).toBeInstanceOf(Array);
    expect(errors.length).toBe(2);
    expect(errors[0].includes('characters')).toBe(true);
  });
  it('returns errors when invalid formats are detected', () => {
    const errors = validate({
      email: 'invalid-email',
      password: 'pass#$%Word',
      username: 'username',
      randomField: 'random value',
    });
    expect(errors).toBeInstanceOf(Array);
    expect(errors.length).toBe(2);
    expect(errors[0].includes('password can only contain alphanumerics')).toBe(
      true,
    );
    expect(errors[0].includes('email must be a valid email')).toBe(true);
  });
});
