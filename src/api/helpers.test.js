import { setToken, destroyToken, getToken } from './helpers';

const token = '678ygvhju7654fiuwbcuh32efbkcuwsdfucbweiufiuwbefgbweybnj';
describe('API Index Test Suite', () => {
  it('should set token', () => {
    expect(setToken(token)).toEqual(token);
  });

  it('should destroy token', () => {
    expect(destroyToken()).toEqual(getToken(token));
  });
});
