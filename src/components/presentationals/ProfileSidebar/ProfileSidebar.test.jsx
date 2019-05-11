import React from 'react';
import { mount } from 'enzyme';

import ProfileSidebar from './ProfileSidebar';

const profile = {
  followers: [],
  followings: [],
  username: '',
  email: '',
  image: '',
};

const undefinedProfile = {
  username: '',
  email: '',
  image: '',
};

describe('ProfileSidebar', () => {
  it('should render correctly', () => {
    const component = mount(<ProfileSidebar {...profile} />);
    expect(component).toMatchSnapshot();
  });

  it('should not render correctly', () => {
    const component = mount(<ProfileSidebar {...undefinedProfile} />);
    expect(component).toMatchSnapshot();
  });
});
