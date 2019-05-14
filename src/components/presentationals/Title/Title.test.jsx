import React from 'react';
import { mount } from 'enzyme';

import Title from './Title';

describe('Title', () => {
  it('should render correctly', () => {
    const component = mount(<Title className="title" content="title" />);
    expect(component).toMatchSnapshot();
  });
});
