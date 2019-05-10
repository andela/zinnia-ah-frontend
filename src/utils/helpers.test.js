import { decodeToken } from './helpers';

describe('Decode Token', () => {
  const userData = {
    id: 'aa7df369-8256-46ae-9d6f-1088f3883e93',
    email: 'kk@zah.com',
  };
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhN2RmMzY5LTgyNTYtNDZhZS05ZDZmLTEwODhmMzg4M2U5MyIsImVtYWlsIjoia2tAemFoLmNvbSIsImlhdCI6MTU1NzQxMDc3NSwiZXhwIjoxNTYwMDAyNzc1fQ.MgpJl20ZjZmQIOcXJ7KjHgilwOjW9DrGCUhXJV7rjwM';
  const decodedToken = decodeToken(token);

  it('should decode a token successfully', () => {
    expect(decodedToken).toBeInstanceOf(Object);
    expect(decodedToken).toHaveProperty('id', 'email', 'iat', 'exp');
    expect(decodedToken.id).toBe(userData.id);
    expect(decodedToken.email).toBe(userData.email);
  });
});
