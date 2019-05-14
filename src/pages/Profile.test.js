import React from 'react';
import { mount } from 'enzyme';

import { Profile, mapStateToProps } from './Profile';

const props = {
  profile: {
    data: {
      image: 'https://dummyimage.com',
      publications: [],
      followings: [],
      followers: [],
    },
  },
  error: {},
  isLoading: true,
  getUserProfileRequest: jest.fn(),
};

const propsWithoutImage = {
  profile: {
    data: {
      image: '',
      publications: [],
      followings: [],
      followers: [],
    },
  },
  error: {},
  isLoading: true,
  getUserProfileRequest: jest.fn(),
};

describe('<Register />', () => {
  it('mounts correctly', () => {
    const shallowWrapper = mount(<Profile {...props} />);
    expect(shallowWrapper).toMatchSnapshot();
  });

  it('mounts correctly', () => {
    const shallowWrapper = mount(<Profile {...propsWithoutImage} />);
    expect(shallowWrapper).toMatchSnapshot();
  });

  it('mounts correctly', () => {
    const DEFAULT_STATE = {
      profile: {
        profile: {
          publications: [],
          followings: [],
          followers: [],
        },
        isLoading: true,
      },
    };
    const action = mapStateToProps(DEFAULT_STATE);
    expect(action).toEqual(DEFAULT_STATE.profile);
  });
});
