import React from 'react';
import { mount } from 'enzyme';

import HorizontalCard from './HorizontalCard';

describe('Horizontal Card', () => {
  it('should render correctly', () => {
    const component = mount(<HorizontalCard className="" />);
    expect(component).toMatchSnapshot();
  });
});
