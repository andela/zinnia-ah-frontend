import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ForgotPasswordCard from './ForgotPasswordCard';

Enzyme.configure({ adapter: new Adapter() });

describe('Forgot Password component', () => {
  test('renders', () => {
    const wrapper = shallow(<ForgotPasswordCard />);

    expect(wrapper.exists()).toBe(true);
  });
});
