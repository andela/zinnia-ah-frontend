import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import AuthenticationCard from '../AuthenticationCard/AuthenticationCard';

import { findByTestAttribute } from '../../../components/presentationals/SocialAuth/SocialAuth.test';

const setupComponent = (props = {}) => {
  const component = shallow(<AuthenticationCard {...props} />);
  return component;
};

describe('<Authentication VerticalCard />', () => {
  let component;

  beforeEach(() => {
    component = setupComponent({ pathname: 'example prop' });
  });

  it('should render with no errors', () => {
    expect(component).toMatchSnapshot();
  });

  it('should receive props', () => {
    const expectedProps = { pathname: 'example prop' };

    const propsError = checkPropTypes(
      AuthenticationCard.propTypes,
      expectedProps,
      'props',
      AuthenticationCard.pathname,
    );

    expect(propsError).toBeUndefined();
  });

  it('should render the social icons', () => {
    const wrapper = findByTestAttribute(component, 'social-icon');
    expect(wrapper.length).toBe(3);
    expect(wrapper.children().length).toBe(3);
  });
});
