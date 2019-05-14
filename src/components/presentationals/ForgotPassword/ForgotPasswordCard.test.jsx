import React from 'react';
import { mount } from 'enzyme';

import ForgotPasswordCard from './ForgotPasswordCard';

describe('ForgotPasswordCard', () => {
  it('should render correctly', () => {
    const component = mount(
      <ForgotPasswordCard
        type="submit"
        value="SEND EMAIL"
        className="btn-dark"
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
