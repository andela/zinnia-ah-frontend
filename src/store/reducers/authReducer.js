import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_REQUESTED,
} from '../actions/types';

const initialState = {
  isLoading: false,
  errorResponse: [],
  successResponse: null,
};

export default function signup(state = initialState, action) {
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
