import { http } from '../../api/client';
import {
  SIGNUP_SUCCESS,
  SIGNUP_INITIALIZED,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_INITIALIZED,
  SOCIAL_SUCCESS,
  signUpIntialize,
  signUpSuccess,
  signUpError,
  authReducer,
  signupUser,
  loginInitialize,
  loginSuccess,
  socialSuccess,
  // socialAuth,
  initialState,
} from './auth';
import { setupStore } from '../../utils/testHelpers';

let store;

describe('SIGNUP ACTIONS', () => {
  const signupMockData = {
    status: 'success',
    message: 'Please check your mail to verify your account',
    data: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhN2RmMzY5LTgyNTYtNDZhZS05ZDZmLTEwODhmMzg4M2U5MyIsImVtYWlsIjoia2tAemFoLmNvbSIsImlhdCI6MTU1NzQxMDc3NSwiZXhwIjoxNTYwMDAyNzc1fQ.MgpJl20ZjZmQIOcXJ7KjHgilwOjW9DrGCUhXJV7rjwM',
    },
  };

  beforeEach(() => {
    store = setupStore();
  });

  it('should dispatch an action for sign up request', () => {
    const action = {
      type: SIGNUP_INITIALIZED,
    };
    expect(signUpIntialize()).toEqual(action);
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
    http.post = jest
      .fn()
      .mockReturnValue(Promise.resolve({ data: signupMockData }));
    const expectedActions = [
      {
        type: 'SIGNUP_INITIALIZED',
      },
      {
        type: 'SIGNUP_SUCCESS',
        response: signupMockData,
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
      { type: 'SIGNUP_INITIALIZED' },
      { type: 'SIGNUP_ERROR' },
    ];
    store.dispatch(signupUser()).then(() => {
      expect(store.getActions()).toEqual(errorActions);
    });
  });
});

describe('LOGIN ACTIONS', () => {
  beforeEach(() => {
    store = setupStore();
  });

  it('should dispatch an action for login up request', () => {
    const action = {
      type: LOGIN_INITIALIZED,
    };
    expect(loginInitialize()).toEqual(action);
  });

  it('should dispatch an action for login up success', () => {
    const response = {};
    const action = {
      type: LOGIN_SUCCESS,
      response,
    };
    expect(loginSuccess(response)).toEqual(action);
  });

  it('should dispatch an action for social auth login success', () => {
    const user = {};
    const action = {
      type: SOCIAL_SUCCESS,
      user,
    };
    expect(socialSuccess(user)).toEqual(action);
  });
});

const loggedInUser = {
  id: '270a37f7-765a-4626-8317-29e6a62d97b9',
  email: 'favourafolayan@gmail.com',
  username: 'favourafolayan@gmail.com',
};

// let location = {};
describe('SOCIAL LOGIN', () => {
  beforeEach(() => {
    store = setupStore();
  });

  // const history = { push: jest.fn() };

  // it('should dispatch a successful social login action', () => {
  //   location = {
  //     search:
  //       '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3MGEzN2Y3LTc2NWEtNDYyNi04MzE3LTI5ZTZhNjJkOTdiOSIsImVtYWlsIjoiZmF2b3VyYWZvbGF5YW5AZ21haWwuY29tIiwidXNlcm5hbWUiOiJmYXZvdXJhZm9sYXlhbkBnbWFpbC5jb20iLCJpYXQiOjE1NTc5ODA2NjAsImV4cCI6MTU2MDU3MjY2MH0.WUI2HrAEelHEWobpIV9_saSeZghfdC8tUwfwrHTEStI&isNewRecord=false',
  //   };

  //   const expectedActions = [
  //     {
  //       type: 'LOGIN_REQUESTED',
  //     },
  //     {
  //       type: 'SOCIAL_SUCCESS',
  //       user: loggedInUser,
  //     },
  //   ];

  //   store.dispatch(socialAuth(history, location));

  //   expect(store.getActions()).toEqual(expectedActions);
  // });

  // it('should dispatch a failed social login action', () => {
  //   location = {};
  //   const expectedActions = [
  //     {
  //       type: 'LOGIN_REQUESTED',
  //     },
  //     {
  //       type: 'LOGIN_ERROR',
  //       error: 'Authentication failed. Please try again',
  //     },
  //   ];
  //   store.dispatch(socialAuth(history, location));
  //   expect(store.getActions()).toEqual(expectedActions);
  // });
});

describe('auth reducer test suite', () => {
  beforeEach(() => {
    store = setupStore();
  });

  it('should return default state', () => {
    const state = authReducer(initialState, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should return signUpIntialize reducer', () => {
    const action = signUpIntialize();
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

  it('should return loginIntialize reducer', () => {
    const action = loginInitialize();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should return login success reducer', () => {
    const action = loginSuccess();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.successResponse).toEqual(action.response);
  });

  it('should return social success reducer', () => {
    const action = socialSuccess(loggedInUser);
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errorResponse).toEqual([]);
    expect(state.loggedInUser).toEqual(action.user);
  });
});
