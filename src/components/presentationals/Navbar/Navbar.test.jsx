import React from 'react';
import { shallow } from 'enzyme';

import { Navbar } from './Navbar';

describe('Navbar', () => {
  const props = { autoLogin: jest.fn() };
  it('should render correctly', () => {
    const component = shallow(
      <Navbar {...props} profileUrl="http://dummyimage.com" className="" />,
    );
    expect(component).toMatchSnapshot();
  });
});
