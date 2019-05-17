import React from 'react';
import { mount } from 'enzyme';

import ForgotPasswordCard from './ForgotPasswordCard';

describe('ForgotPasswordCard', () => {
  it('should render correctly', () => {
    const component = mount(<ForgotPasswordCard />);
    expect(component).toMatchSnapshot();
  });
});
