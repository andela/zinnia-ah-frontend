import React from 'react';
import { mount } from 'enzyme';

import ProfileSettings from './ProfileSettings';

describe('Settings', () => {
  it('should render correctly', () => {
    const component = mount(<ProfileSettings />);
    expect(component).toMatchSnapshot();
  });
});
