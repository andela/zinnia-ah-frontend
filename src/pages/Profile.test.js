import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { Profile, mapStateToProps } from './Profile';

const props = {
  profile: {
    image: 'https://dummyimage.com',
    firstName: 'mr',
    lastName: 'user',
    bio: 'I am the correct user',
    email: 'dummy@user.com',
    username: 'dummyuser',
  },
  publications: [],
  followings: [],
  followers: [],
  error: {},
  isLoading: true,
  isDeleting: false,
  deleteArticle: jest.fn(),
  getUserProfileRequest: jest.fn(),
  match: {
    params: {
      username: 'igbominadeveloper',
    },
  },
};

const propsWithoutImage = {
  profile: {
    image: '',
    firstName: 'mr',
    lastName: 'user',
    bio: 'I am the correct user',
    email: 'dummy@user.com',
    username: 'dummyuser',
  },
  publications: [],
  followings: [],
  followers: [],
  error: {},
  isLoading: true,
  isDeleting: false,
  deleteArticle: jest.fn(),
  getUserProfileRequest: jest.fn(),
  match: {
    params: {
      username: 'igbominadeveloper',
    },
  },
};

describe('<Profile />', () => {
  it('mounts correctly', () => {
    const shallowWrapper = mount(
      <BrowserRouter>
        <Profile {...props} />
      </BrowserRouter>,
    );
    expect(shallowWrapper).toMatchSnapshot();
  });

  it('mounts correctly without image', () => {
    const shallowWrapper = mount(
      <BrowserRouter>
        <Profile {...propsWithoutImage} />
      </BrowserRouter>,
    );
    expect(shallowWrapper).toMatchSnapshot();
  });

  it('mounts correctly', () => {
    const DEFAULT_STATE = {
      profile: {
        image: 'https://dummyimage.com',
        firstName: 'mr',
        lastName: 'user',
        bio: 'I am the correct user',
        email: 'dummy@user.com',
        username: 'dummyuser',
      },
    };
    const action = mapStateToProps(DEFAULT_STATE);
    expect(action).toEqual(DEFAULT_STATE);
  });
});
