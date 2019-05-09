import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
// import axios from 'axios';

import Signup from './Signup';
// import { authActions, types, authReducer } from '../../store';
import { signupUser } from '../../store/actions/authActions';
import { http } from '../../utils/helpers';

// jest.mock('axios');
const mockStore = configureStore([thunk]);
const initialState = {
  auth: {
    isLoading: false,
    errorResponse: [],
    successResponse: null,
  },
};
const store = mockStore(initialState);
const signupPage = () => {
  const props = {
    history: {},
    signupUser: jest.fn(),
    userCredentials: '',
    signupError: '',
  };
  const mountWrapper = mount(
    <Provider store={mockStore(initialState)}>
      <Signup {...props} />
    </Provider>,
  );
  return { mountWrapper };
};
const { mountWrapper } = signupPage();

describe('Signup Test Suite', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <Signup />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
  it('it should have all expected input fields', () => {
    const emailField = mountWrapper.find('input[name="email"]').props();
    expect(emailField.name).toBe('email');
    const usernameField = mountWrapper.find('input[name="username"]').props();
    expect(usernameField.name).toBe('username');
    const passwordField = mountWrapper.find('input[name="password"]').props();
    expect(passwordField.name).toBe('password');
  });
  it('it should not submit the form if any input field is empty', () => {
    const signup = jest.fn();
    mountWrapper.find('form').simulate('click', {
      preventDefault: () => {},
      target: {
        elements: {
          username: { value: '' },
          email: { value: '' },
          password: { value: '' },
        },
      },
    });
    expect(signup).not.toHaveBeenCalled();
  });
});

const mockData = {
  username: 'janesmith',
  email: 'jsmith@gmail.com',
  password: 'whatpassword',
};

describe('Signup action creator', () => {
  it('should dispatch a successful signup action', () => {
    http.post = jest.fn().mockReturnValue(Promise.resolve({ data: mockData }));
    const expectedActions = [
      {
        type: 'SIGNUP_REQUESTED',
      },
      {
        type: 'SIGNUP_SUCCESS',
        response: mockData,
      },
    ];
    return store.dispatch(signupUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch a failed signup action', () => {
    http.post = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error('something bad happened')));
    const errorActions = [
      { type: 'SIGNUP_REQUESTED' },
      { type: 'SIGNUP_ERROR' },
    ];
    store.dispatch(signupUser()).then(() => {
      expect(store.getActions()).toEqual(errorActions);
    });
  });
});
