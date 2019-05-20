import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import ProfileSettings from './ProfileSettings';
import { profileReducer } from '../../../store/modules/profile';
import { Provider } from 'react-redux';

let store;
const profileData = {
  data: {
    username: 'examplename',
    email: 'example@mail.com',
  },
  currentView: () => {},
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
        <ProfileSettings currentView={profileData.currentView} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('should simulate image preview correctly', () => {
    const file = new File(['(⌐□_□)'], 'chucknorris.png', {
      type: 'image/png',
    });
    const component = mount(
      <Provider store={store}>
        <ProfileSettings currentView={profileData.currentView} />
      </Provider>,
    );

    component
      .find('input[name="upload_profile_picture"]')
      .simulate('change', { target: { files: [file] } });
    expect(component.state('previewImage')).toEqual(undefined);
    component.unmount();
  });

  it('returns initial reducer state', () => {
    profileData.data.username = '';
    profileData.data.email = '';
    const reducer = profileReducer(undefined, {});
    expect(reducer).toEqual({
      error: {},
      isLoading: true,
      bio: '',
      email: '',
      firstName: '',
      followers: [],
      followings: [],
      image: '',
      isDeleting: false,
      lastName: '',
      publications: [],
      bookmarks: [],
      updatedAt: '',
      username: '',
    });
  });

  it('returns new reducer state', () => {
    profileData.data.username = 'exampleusername';
    profileData.data.email = 'example@mail.com';
    const reducer = profileReducer(profileData, {});
    expect(reducer).toEqual(profileData);
  });
});
