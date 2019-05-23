import {
  setToken,
  destroyToken,
  getToken,
  getEncodedUser,
  destroyEncodedUser,
  isFollowing,
  setLoggedInUser,
  getLoggedInUser,
} from './helpers';

const token = '678ygvhju7654fiuwbcuh32efbkcuwsdfucbweiufiuwbefgbweybnj';
const followers = [
  {
    username: 'example',
    firstName: 'people',
  },
];

describe('API Index Test Suite', () => {
  it('should set token', () => {
    expect(setToken(token)).toEqual(token);
  });

  it('should destroy token', () => {
    expect(destroyToken()).toEqual(getToken(token));
  });

  it('should encode getEncodedUser', () => {
    expect(getEncodedUser()).toEqual(null);
  });

  it('should destroy EncodedUser', () => {
    expect(destroyEncodedUser()).toEqual(null);
  });
  it('should store loggedin username', () => {
    expect(setLoggedInUser('example')).toEqual('example');
  });

  it('should get loggedin username', () => {
    expect(getLoggedInUser()).toEqual('example');
  });

  it('should find users following', () => {
    expect(isFollowing(followers)).toEqual({
      username: 'example',
      firstName: 'people',
    });
  });

  it('should not find user following', () => {
    followers.username = 'anotdher';
    expect(isFollowing(followers)).toEqual(false);
  });
});
