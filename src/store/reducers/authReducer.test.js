import {
  signUpRequest,
  signUpSuccess,
  signUpError,
} from '../../store/actions/authActions';
import signup from './authReducer';

const initialState = {
  isLoading: false,
  errorResponse: [],
  successResponse: null,
};

describe('auth reducer test suite', () => {
  it('should return default state', () => {
    const state = signup(initialState, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should return signupRequest reducer', () => {
    const action = signUpRequest();
    const state = signup(initialState, action);
    expect(state.isLoading).toBe(true);
  });
  it('should return signup success reducer', () => {
    const action = signUpSuccess();
    const state = signup(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.successResponse).toEqual(action.response);
  });
  it('should return signup failure reducer', () => {
    const action = signUpError();
    const state = signup(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errorResponse).toEqual(action.error);
  });
});
