// import thunk from 'redux-thunk';
// import configureStore from 'redux-mock-store';
// import axios from 'axios';

import {
  signUpRequest,
  signUpSuccess,
  signUpError,
} from '../../store/actions/authActions';

// const mockStore = configureStore([thunk]);

describe('signup actions', () => {
  it('should dispatch an action for sign up request', () => {
    const action = signUpRequest();
    expect(action.type).toBe('SIGNUP_REQUESTED');
  });
  it('should dispatch an action for sign up success', () => {
    const action = signUpSuccess();
    expect(action.type).toBe('SIGNUP_SUCCESS');
  });
  it('should dispatch an action for sign up error', () => {
    const action = signUpError();
    expect(action.type).toBe('SIGNUP_ERROR');
  });
});
