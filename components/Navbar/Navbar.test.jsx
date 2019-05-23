import React from 'react';
import { mount } from 'enzyme';

import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render correctly', () => {
    const component = mount(
      <Navbar profileUrl="http://dummyimage.com" className="" />,
    );
    expect(component).toMatchSnapshot();
  });
});
