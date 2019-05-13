import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Form } from 'semantic-ui-react';

import ForgotPasswordCard from './ForgotPasswordCard';
import Title from '../Title/Title';
import Button from '../Button/Button';

configure({ adapter: new Adapter() });

describe('<ForgotPasswordCard />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ForgotPasswordCard />);
  });

  test('renders', () => {
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
          value="SEND EMAIL"
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
