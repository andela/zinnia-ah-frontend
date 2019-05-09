export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_REQUESTED = 'SIGNUP_REQUESTED';
import { http, setToken } from '../../api';

export function signUpRequest() {
  return {
    type: SIGNUP_REQUESTED,
  };
}

export function signUpSuccess(response) {
  return {
    type: SIGNUP_SUCCESS,
    response,
  };
}

export function signUpError(error) {
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
      setToken(data.data.token);
      dispatch(signUpSuccess(data));
    } catch (error) {
      dispatch(signUpError(error.response.data.errors));
    }
  };
}

export const initialState = {
  isLoading: false,
  errorResponse: [],
  successResponse: [],
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        successResponse: action.response,
        isLoading: false,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    default:
      return state;
  }
}
