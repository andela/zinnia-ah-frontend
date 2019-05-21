import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './NotFound';

describe('Not Found', () => {
  it('renders without errors', () => {
    const component = shallow(<NotFound />);
    expect(component).toMatchSnapshot();
  });
});
