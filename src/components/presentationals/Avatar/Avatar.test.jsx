import React from 'react';
import { mount } from 'enzyme';

import Avatar from './Avatar';

describe('Avatar', () => {
  it('should render correctly', () => {
    const component = mount(
      <Avatar className="btn" src="http://dummyimage.jpg" />,
    );
    expect(component).toMatchSnapshot();
  });
});
