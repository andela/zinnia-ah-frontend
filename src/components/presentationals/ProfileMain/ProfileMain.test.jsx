import React from 'react';
import { mount } from 'enzyme';

import ProfileMain from './ProfileMain';

const props = {
  firstName: 'mr',
  lastName: 'user',
  bio: 'I am the correct user',
  publications: [],
  followings: [],
  followers: [],
  image: 'http://dummyImage.jpg',
  email: 'dummy@user.com',
  username: 'dummyuser',
  error: {},
  isLoading: true,
  isDeleting: false,
};

const undefinedProps = {
  publications: [],
};

const lastNameUndefinedProps = {
  firstName: 'ererger',
  bio: 'egrerg',
  publications: [],
};
describe('ProfileMain', () => {
  it('should render correctly', () => {
    const component = mount(<ProfileMain {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should not render correctly', () => {
    const component = mount(<ProfileMain {...lastNameUndefinedProps} />);
    expect(component).toMatchSnapshot();
  });

  it('should not render correctly', () => {
    const component = mount(<ProfileMain {...undefinedProps} />);
    expect(component).toMatchSnapshot();
  });

  it('should render Posts Tab correctly', () => {
    const component = mount(<ProfileMain {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render Stats Tab correctly', () => {
    const component = mount(<ProfileMain {...props} />);
    const login = component.find('MenuItem[name="Stats"]').simulate('click');
    expect(login).toMatchSnapshot();
  });

  it('should render Likes Tab correctly', () => {
    const component = mount(<ProfileMain {...props} />);
    const login = component.find('MenuItem[name="Likes"]').simulate('click');
    expect(login).toMatchSnapshot();
  });

  it('should render Comments Tab correctly', () => {
    const component = mount(<ProfileMain {...props} />);
    const login = component.find('MenuItem[name="Comments"]').simulate('click');
    expect(login).toMatchSnapshot();
  });

  it('should render Bookmarks Tab correctly', () => {
    const component = mount(<ProfileMain {...props} />);
    const login = component
      .find('MenuItem[name="Bookmarks"]')
      .simulate('click');
    expect(login).toMatchSnapshot();
  });

  it('should render Reports Tab correctly', () => {
    const component = mount(<ProfileMain {...props} />);
    const login = component.find('MenuItem[name="Reports"]').simulate('click');
    expect(login).toMatchSnapshot();
  });

  it('should render Settings Tab correctly', () => {
    const component = mount(<ProfileMain {...props} />);
    // const login = component.find('MenuItem[name="Settings"]').simulate('click');
    expect(component).toMatchSnapshot();
  });
});
