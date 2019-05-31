import { toast } from 'react-toastify';

import { signUpRequest, loginRequest } from '../../api/auth';
import {
  setToken,
  encodeUserObject,
  destroyEncodedUser,
  destroyToken,
  getEncodedUser,
} from '../../api/helpers';

//constants
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_INITIALIZED = 'SIGNUP_INITIALIZED';
export const LOGIN_INITIALIZED = 'LOGIN_REQUESTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SOCIAL_SUCCESS = 'SOCIAL_SUCCESS';
export const LOGOUT_INITIALIZED = 'LOGOUT_INITIALIZED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const initialState = {
  isLoading: false,
  errorResponse: [],
  successResponse: { status: '' },
  loggedInUser: null,
};

export const signUpIntialize = () => {
  return {
    type: SIGNUP_INITIALIZED,
  };
};

export const signUpSuccess = response => {
  return {
    type: SIGNUP_SUCCESS,
    response,
  };
};

export const signUpError = error => {
  return {
    type: SIGNUP_ERROR,
    error,
  };
};

export const loginInitialize = () => {
  return {
    type: LOGIN_INITIALIZED,
  };
};

export const loginSuccess = response => {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
};

export const loginError = error => {
  return {
    type: LOGIN_ERROR,
    error,
  };
};

export const socialSuccess = user => {
  return {
    type: SOCIAL_SUCCESS,
    user,
  };
};

export const logoutInitialize = () => {
  return {
    type: LOGOUT_INITIALIZED,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const loginUser = (userData, history, redirectUrl) => {
  return async dispatch => {
    try {
      dispatch(loginInitialize());
      const { data } = await loginRequest(userData);
      setToken(data.data.token);
      encodeUserObject(data.data.authenticatedUser);
      dispatch(loginSuccess(data.data.authenticatedUser));
      toast.success(data.message);
      history.push(redirectUrl);
    } catch (error) {
      const { data } = error.response;
      dispatch(loginError([data]));
    }
  };
};

export const signupUser = (userData, history) => {
  return async dispatch => {
    try {
      dispatch(signUpIntialize());
      const { data } = await signUpRequest(userData);
      dispatch(signUpSuccess(data));
      history.push('/');
      toast.success(data.message);
      history.push('/');
    } catch (error) {
      const { data } = error.response;
      dispatch(signUpError([data]));
    }
  };
};

export const autoLogin = (userObject = {}) => {
  return async dispatch => {
    try {
      dispatch(loginInitialize());
      userObject = getEncodedUser();
      dispatch(loginSuccess(userObject));
    } catch (error) {
      toast.error(error.message);
      dispatch(loginError(error));
    }
  };
};
export const logout = () => {
  return async dispatch => {
    dispatch(logoutInitialize());
    destroyEncodedUser();
    destroyToken();
    dispatch(logoutSuccess());
    location.href = '/';
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        successResponse: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    case LOGIN_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedInUser: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    case SOCIAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loggedInUser: action.user,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedInUser: null,
        successResponse: {},
        errorResponse: [],
        isLoading: false,
      };

    case LOGOUT_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
