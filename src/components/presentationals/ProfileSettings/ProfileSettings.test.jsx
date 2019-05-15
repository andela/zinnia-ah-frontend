import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import ProfileSettings from './ProfileSettings';
import { profileReducer } from '../../../store/modules/profile';
import { Provider } from 'react-redux';

let store;
const profileData = {
  data: {
    followers: [],
    followings: [],
    username: 'examplename',
    email: 'example@mail.com',
    image: '',
    bio: '',
    firstName: '',
    lastName: '',
    publications: [],
  },
};
const profile = {
  ...profileData,
  status: 'success',
  message: 'fetched user',
};

describe('ProfileSettings', () => {
  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({ profile: { profile } });
  });

  it('should render profile settings correctly', () => {
    const component = mount(
      <Provider store={store}>
        <ProfileSettings />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('returns initial reducer state', () => {
    profileData.data.username = '';
    profileData.data.email = '';
    const reducer = profileReducer(undefined, {});
    expect(reducer).toEqual({
      error: {},
      isLoading: true,
      profile: {
        data: {
          bio: '',
          firstName: '',
          followers: [],
          followings: [],
          lastName: '',
          publications: [],
        },
      },
    });
  });
});
