import React from 'react';
import { mount } from 'enzyme';

import ResetPasswordCard from './ResetPasswordCard';

describe('ForgotPasswordCard', () => {
  it('should render correctly', () => {
    const component = mount(<ResetPasswordCard />);
    expect(component).toMatchSnapshot();
  });
});
