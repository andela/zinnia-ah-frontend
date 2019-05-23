import React from 'react';
import { shallow } from 'enzyme';

import ResetPasswordCard from './ResetPasswordCard';
import Title from '../Title/Title';
import Button from '../Button/Button';

const props = {
  password: '',
  confirmPassword: '',
  handleChange: jest.fn(),
  validationErrors: [],
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
