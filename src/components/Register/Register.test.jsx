import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Register from '../Register/Register';

const mockStore = configureStore([thunk]);

const initalState = {
  auth: {
    isLoading: false,
    errorResponse: [],
    successResponse: [],
  },
};

const store = mockStore(initalState);

const wrapper = mount(
  <Provider store={store}>
    <Register />,
  </Provider>,
);

describe('<Register />', () => {
  it('mounts correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a form with className form', () => {
    const form = wrapper.find('form');
    expect(form.hasClass('form')).toBe(true);
  });

  it('rendered a form with 3 input fields', () => {
    const inputs = wrapper.find('input').getElements();
    expect(inputs.length).toBe(3);
  });

  it('correctly initializes the value of the username field to an empty string', () => {
    const input = wrapper.find('input[name="username"]');
    expect(input.prop('value')).toBe('');
  });

  it('correctly initializes the value of the email field to an empty string', () => {
    const input = wrapper.find('input[name="email"]');
    expect(input.prop('value')).toBe('');
  });

  it('correctly initializes the value of the password field to an empty string', () => {
    const input = wrapper.find('input[name="password"]');
    expect(input.prop('value')).toBe('');
  });
});
