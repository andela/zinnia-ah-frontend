import {
  decodeToken,
  getToken,
  setToken,
  destroyToken,
  generateFormData,
} from './helpers';

describe('Token', () => {
  const userData = {
    id: 'aa7df369-8256-46ae-9d6f-1088f3883e93',
    email: 'kk@zah.com',
  };
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhN2RmMzY5LTgyNTYtNDZhZS05ZDZmLTEwODhmMzg4M2U5MyIsImVtYWlsIjoia2tAemFoLmNvbSIsImlhdCI6MTU1NzQxMDc3NSwiZXhwIjoxNTYwMDAyNzc1fQ.MgpJl20ZjZmQIOcXJ7KjHgilwOjW9DrGCUhXJV7rjwM';
  setToken(token);
  const getNewToken = getToken();
  const decodedToken = decodeToken(getNewToken);

  it('should get a token successfully', () => {
    expect(getToken()).toEqual(token);
  });

  it('should decode a token successfully', () => {
    expect(decodedToken).toBeInstanceOf(Object);
    expect(decodedToken).toHaveProperty('id', 'email', 'iat', 'exp');
    expect(decodedToken.id).toBe(userData.id);
    expect(decodedToken.email).toBe(userData.email);
  });

  it('should destroy/remove a token successfully', () => {
    expect(destroyToken()).toEqual(undefined);
    expect(getToken()).toEqual(null);
  });
});

describe('Auto Form Generator', () => {
  const formFields = [
    { name: 'username', value: 'exampleusername' },
    { name: 'firstName', value: 'Example' },
    { name: 'lastName', value: 'My Name' },
  ];

  it('should get a token successfully', () => {
    const formData = generateFormData(formFields);
    expect(formData).toBeInstanceOf(Object);
    expect(formData).toHaveProperty('username', 'firstName', 'lastName');
    expect(formData.username).toBe('exampleusername');
  });
});
