import React from 'react';
import { shallow } from 'enzyme';
import { Form } from 'semantic-ui-react';

import ForgotPasswordCard from './ForgotPasswordCard';
import Title from '../Title/Title';
import Button from '../Button/Button';

describe('<ForgotPasswordCard />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ForgotPasswordCard />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.auth-card').length).toBe(1);
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
          value="SEND INSTRUCTIONS"
          className="btn-dark"
          key="first"
        />,
      ]),
    ).toEqual(true);
  });

  it('should contain a form', () => {
    expect(
      wrapper.containsAnyMatchingElements([
        <Form.Field key="first">
          <input />
        </Form.Field>,
      ]),
    ).toEqual(true);
  });
});
