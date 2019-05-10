import { signUpRequest } from '../../api/client';

//constants
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_INITIALIZED = 'SIGNUP_INITIALIZED';

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

export const signupUser = userData => {
  return async dispatch => {
    try {
      dispatch(signUpIntialize());
      const { data } = await signUpRequest(userData);

      dispatch(signUpSuccess(data));
    } catch (error) {
      const { data } = error.response;
      dispatch(signUpError([data]));
    }
  };
};

export const initialState = {
  isLoading: false,
  errorResponse: [],
  successResponse: { status: '' },
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

    default:
      return state;
  }
};
