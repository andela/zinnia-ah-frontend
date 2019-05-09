import React from 'react';
import { shallow, mount } from 'enzyme';

import { unwrappedRegister as Register } from '../Register/Register';

const props = {
  auth: {
    isLoading: true,
  },
  signupUser: jest.fn(),
};
const shallowWrapper = shallow(<Register {...props} />);
const mountWrapper = mount(<Register {...props} />);

describe('<Register />', () => {
  it('mounts correctly', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it('renders a form with className form', () => {
    const form = shallowWrapper.find('form');
    expect(form.hasClass('form')).toBe(true);
  });

  it('rendered a form with 3 input fields', () => {
    const inputs = shallowWrapper.find('input').getElements();
    expect(inputs.length).toBe(3);
  });

  it('correctly initializes the value of the username field to an empty string', () => {
    const input = shallowWrapper.find('input[name="username"]');
    expect(input.prop('value')).toBe('');
  });

  it('correctly initializes the value of the email field to an empty string', () => {
    const input = shallowWrapper.find('input[name="email"]');
    expect(input.prop('value')).toBe('');
  });

  it('correctly initializes the value of the password field to an empty string', () => {
    const input = shallowWrapper.find('input[name="password"]');
    expect(input.prop('value')).toBe('');
  });

  it('does not submit the form if there is an empty field', () => {
    const form = shallowWrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(shallowWrapper.instance().state.emptyFields.length).toBe(3);
    expect(shallowWrapper.instance().state.emptyFields).toContain(
      'email',
      'password',
      'username',
    );
    const input = shallowWrapper.find('input[name="username"]');
    expect(input.props().className).toContain('error');
  });

  it('updates all fields with invalid values', () => {
    const username = mountWrapper.find('input[name="username"]');
    username.instance().value = 'io';
    username.simulate('change');
    const email = mountWrapper.find('input[name="email"]');
    email.instance().value = 'igbominadeveloper@';
    email.simulate('change');
    const password = mountWrapper.find('input[name="password"]');
    password.instance().value = 'password1____';
    password.simulate('change');
    expect(mountWrapper.state().userCredentials.username).toBe('io');
    expect(mountWrapper.state().userCredentials.email).toBe(
      'igbominadeveloper@',
    );
    expect(mountWrapper.state().userCredentials.password).toBe('password1____');
    const form = mountWrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(mountWrapper.state().validationErrors.length).toBeGreaterThan(0);
  });

  it('returns a validation error for an invalid field input', () => {
    const username = mountWrapper.find('input[name="username"]');
    username.instance().value = 'igbominadeveloper';
    username.simulate('change');
    const email = mountWrapper.find('input[name="email"]');
    email.instance().value = 'igbominadeveloper@ah.com';
    email.simulate('change');
    const password = mountWrapper.find('input[name="password"]');
    password.instance().value = 'passwor';
    password.simulate('change');
    expect(mountWrapper.state().userCredentials.username).toBe(
      'igbominadeveloper',
    );
    expect(mountWrapper.state().userCredentials.email).toBe(
      'igbominadeveloper@ah.com',
    );
    expect(mountWrapper.state().userCredentials.password).toBe('passwor');
    const form = mountWrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(mountWrapper.state().validationErrors.length).toBeGreaterThan(0);
    password.instance().value = '';
    password.simulate('change');
    expect(mountWrapper.state().validationErrors.length).toBeGreaterThan(0);
  });

  it('should submit the form and have an empty error body', () => {
    const username = mountWrapper.find('input[name="username"]');
    username.instance().value = 'igbominadeveloper';
    username.simulate('change');
    const email = mountWrapper.find('input[name="email"]');
    email.instance().value = 'igbominadeveloper@ah.com';
    email.simulate('change');
    const password = mountWrapper.find('input[name="password"]');
    password.instance().value = 'password1';
    password.simulate('change');
    const form = mountWrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(mountWrapper.state().validationErrors.length).toBe(0);
  });
});