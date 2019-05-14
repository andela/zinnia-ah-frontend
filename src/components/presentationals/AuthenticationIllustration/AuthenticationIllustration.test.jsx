import React from 'react';
import { mount } from 'enzyme';

import AuthenticationIllustration from './AuthenticationIllustration';

describe('AuthenticationIllustration', () => {
  it('should render correctly', () => {
    const component = mount(<AuthenticationIllustration />);
    expect(component).toMatchSnapshot();
  });
});
