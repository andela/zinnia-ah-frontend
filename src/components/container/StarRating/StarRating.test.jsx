import React from 'react';
import { mount } from 'enzyme';

import StarRating from './StarRating';

describe('<StarRating />', () => {
  it('should render correctly', () => {
    const component = mount(<StarRating />);
    expect(component).toMatchSnapshot();
  });
});
