import React from 'react';
import { mount } from 'enzyme';

import VerticalCard from './VerticalCard';

describe('Vertical Card', () => {
  it('should render correctly', () => {
    const component = mount(<VerticalCard />);
    expect(component).toMatchSnapshot();
  });
});
