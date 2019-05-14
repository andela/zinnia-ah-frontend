/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';

import AuthenticationCard from '../AuthenticationCard/AuthenticationCard';

import { findByTestAttribute } from '../../../utils/testHelpers';

const setupComponent = (props = {}) => {
  const component = shallow(<AuthenticationCard {...props} />);
  return component;
};

describe('<Authentication Card />', () => {
  let component;

  beforeEach(() => {
    component = setupComponent();
  });

  it('should render with no errors', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render the social icons', () => {
    const wrapper = findByTestAttribute(component, 'social-icon');
    expect(wrapper.length).toBe(3);
    expect(wrapper.children().length).toBe(3);
  });
});
