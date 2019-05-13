import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ResetPasswordCard from './ResetPasswordCard';
import Title from '../Title/Title';
import Button from '../Button/Button';

configure({ adapter: new Adapter() });

const props = {
  password: '',
  confirmPassword: '',
  handleChange: jest.fn(),
  errors: { password: '', confirmPassword: '' },
  handleSubmit: jest.fn(),
};

describe('<ResetPasswordCard />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResetPasswordCard {...props} />);
  });

  it('should render <ResetPasswordCard />', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a <Title />', () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });

  it('should render a <Button />', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should contain correct Button properties', () => {
    expect(
      wrapper.containsAnyMatchingElements([
        <Button
          type="submit"
          value="RESET PASSWORD"
          className="btn-dark"
          key="first"
        />,
      ]),
    ).toEqual(true);
  });
});
