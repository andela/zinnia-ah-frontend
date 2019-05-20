import { toast } from 'react-toastify';

import { http } from '../../api/client';

export const FORGOT_PASSWORD_INITIALIZED = 'FORGOT_PASSWORD_INITIALIZED';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';
export const RESET_PASSWORD_INITIALIZED = 'RESET_PASSWORD_INITIALIZED';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

export const forgotPasswordInitialized = () => {
  return {
    type: FORGOT_PASSWORD_INITIALIZED,
  };
};

export const forgotPasswordSuccess = () => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  };
};

export const forgotPasswordError = () => {
  return {
    type: FORGOT_PASSWORD_ERROR,
  };
};

export const resetPasswordInitialized = () => {
  return {
    type: RESET_PASSWORD_INITIALIZED,
  };
};

export const resetPasswordSuccess = () => {
  return {
    type: RESET_PASSWORD_SUCCESS,
  };
};

export const resetPasswordError = () => {
  return {
    type: RESET_PASSWORD_ERROR,
  };
};

export const forgotPasswordRequest = email => {
  return async dispatch => {
    try {
      dispatch(forgotPasswordInitialized());
      await http.post('/auth/users/forgot-password', {
        email,
      });
      dispatch(forgotPasswordSuccess());
      toast.success('A reset link has been sent to your email');
    } catch (error) {
      dispatch(forgotPasswordError());
      toast.error('Something went wrong. Request Unsuccessful!');
    }
  };
};

export const resetPasswordRequest = (password, token, history) => {
  return async dispatch => {
    try {
      dispatch(resetPasswordInitialized());
      await http.patch(`/auth/users/reset-password/${token}`, {
        password,
      });
      dispatch(resetPasswordSuccess());
      history.push('/login');
      toast.success('Your password has been successfully changed!');
    } catch (error) {
      dispatch(resetPasswordError());
      toast.error('There was an error changing your password');
    }
  };
};

const initialState = {
  isLoading: false,
};

export const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case RESET_PASSWORD_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
