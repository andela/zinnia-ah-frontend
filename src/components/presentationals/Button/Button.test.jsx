import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';

describe('Button', () => {
  it('should render correctly', () => {
    const component = mount(
      <Button className="btn" type="button" value="login" />,
    );
    expect(component).toMatchSnapshot();
  });
});
