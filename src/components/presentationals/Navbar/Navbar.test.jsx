import React from 'react';
import { shallow } from 'enzyme';

import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Navbar profileUrl="http://dummyimage.com" className="" />,
    );
    expect(component).toMatchSnapshot();
  });
});
