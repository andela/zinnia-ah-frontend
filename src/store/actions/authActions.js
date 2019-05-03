import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNUP_REQUESTED } from './types';
import { http } from '../../utils/helpers';

function signUpRequest() {
  return {
    type: SIGNUP_REQUESTED,
  };
}

function signUpSuccess(response) {
  return {
    type: SIGNUP_SUCCESS,
    response,
  };
}

function signUpError(error) {
  return {
    type: SIGNUP_ERROR,
    error,
  };
}

export function signupUser(userData) {
  return async dispatch => {
    try {
      dispatch(signUpRequest());
      const { data } = await http.post('/auth/signup', userData);
      dispatch(signUpSuccess(data));
    } catch (error) {
      dispatch(signUpError(error.response.data.errors));
    }
  };
}
