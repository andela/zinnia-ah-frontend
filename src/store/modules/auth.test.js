import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  SIGNUP_SUCCESS,
  SIGNUP_REQUESTED,
  SIGNUP_ERROR,
  initialState,
  signUpRequest,
  signUpSuccess,
  signUpError,
  authReducer,
  signupUser,
} from './auth';
import { http } from '../../api';

const mockStore = configureStore([thunk]);
const store = mockStore(initialState);
const mockData = {
  status: 'success',
  message: 'Please check your mail to verify your account',
  data: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhN2RmMzY5LTgyNTYtNDZhZS05ZDZmLTEwODhmMzg4M2U5MyIsImVtYWlsIjoia2tAemFoLmNvbSIsImlhdCI6MTU1NzQxMDc3NSwiZXhwIjoxNTYwMDAyNzc1fQ.MgpJl20ZjZmQIOcXJ7KjHgilwOjW9DrGCUhXJV7rjwM',
  },
};

describe('signup actions', () => {
  it('should dispatch an action for sign up request', () => {
    const action = {
      type: SIGNUP_REQUESTED,
    };
    expect(signUpRequest()).toEqual(action);
  });
  it('should dispatch an action for sign up success', () => {
    const response = {};
    const action = {
      type: SIGNUP_SUCCESS,
      response,
    };
    expect(signUpSuccess(response)).toEqual(action);
  });
  it('should dispatch an action for sign up error', () => {
    const error = '';
    const action = {
      type: SIGNUP_ERROR,
      error,
    };
    expect(signUpError(error)).toEqual(action);
  });
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

describe('auth reducer test suite', () => {
  it('should return default state', () => {
    const state = authReducer(initialState, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should return signupRequest reducer', () => {
    const action = signUpRequest();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });
  it('should return signup success reducer', () => {
    const action = signUpSuccess();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.successResponse).toEqual(action.response);
  });
  it('should return signup failure reducer', () => {
    const action = signUpError();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errorResponse).toEqual(action.error);
  });
});
