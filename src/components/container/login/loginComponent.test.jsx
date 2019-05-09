import React from 'react';
import { mount } from 'enzyme';
import { Login } from './loginComponent';

const props = {
  auth: {
    isLoading: true,
    successResponse: {
      status: 'success',
      message: '',
    },
    errorResponse: [],
  },
  loginUser: jest.fn(),
};

const wrapper = mount(<Login {...props} />);

describe('<Login />', () => {
  it('should mount correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a form with className form', () => {
    const form = wrapper.find('form');
    expect(form.hasClass('form')).toBe(true);
  });

  it('should render a form with 2 input fields', () => {
    const inputs = wrapper.find('input').getElements();
    expect(inputs.length).toBe(2);
  });

  it('should correctly initialize the value of the email field to an empty string', () => {
    const input = wrapper.find('input[name="email"]');
    expect(input.prop('value')).toBe('');
  });

  it('should correctly initializes the value of the password field to an empty string', () => {
    const input = wrapper.find('input[name="password"]');
    expect(input.prop('value')).toBe('');
  });

  it('should not submit the form if there is an empty field', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(wrapper.instance().state.validationErrors.length).toBe(2);
    expect(wrapper.instance().state.validationErrors).toContain(
      'email is required',
      'password is required',
    );
  });

  it('should update all fields with invalid values', () => {
    const email = wrapper.find('input[name="email"]');
    email.instance().value = 'igbominadeveloper@';
    email.simulate('change');
    const password = wrapper.find('input[name="password"]');
    password.instance().value = 'password1____';
    password.simulate('change');
    expect(wrapper.state().userCredentials.email).toBe('igbominadeveloper@');
    expect(wrapper.state().userCredentials.password).toBe('password1____');
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(wrapper.state().validationErrors.length).toBeGreaterThan(0);
  });

  it('should return a validation error for an invalid field input', () => {
    const email = wrapper.find('input[name="email"]');
    email.instance().value = 'igbominadeveloper@ah.com';
    email.simulate('change');
    const password = wrapper.find('input[name="password"]');
    password.instance().value = 'passwor';
    password.simulate('change');
    expect(wrapper.state().userCredentials.email).toBe(
      'igbominadeveloper@ah.com',
    );
    expect(wrapper.state().userCredentials.password).toBe('passwor');
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(wrapper.state().validationErrors.length).toBeGreaterThan(0);
    password.instance().value = '';
    password.simulate('change');
    expect(wrapper.state().validationErrors.length).toBeGreaterThan(0);
  });

  it('should submit the form and have an empty error body', () => {
    const email = wrapper.find('input[name="email"]');
    email.instance().value = 'igbominadeveloper@ah.com';
    email.simulate('change');
    const password = wrapper.find('input[name="password"]');
    password.instance().value = 'password1';
    password.simulate('change');
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(wrapper.state().validationErrors.length).toBe(0);
  });
});
