import { customSearchRequest } from '../../api/search';

//constants
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const SEARCH_INITIALIZED = 'SEARCH_INITIALIZED';

export const initialState = {
  isLoading: false,
  errorResponse: [],
  successResponse: {
    data: {
      articles: [],
      authors: [],
      tags: [],
    },
  },
};

export const searchIntialize = () => {
  return {
    type: SEARCH_INITIALIZED,
  };
};

export const searchSuccess = response => {
  return {
    type: SEARCH_SUCCESS,
    response,
  };
};

export const searchError = error => {
  return {
    type: SEARCH_ERROR,
    error,
  };
};

export const customSearch = keyword => {
  return async dispatch => {
    try {
      dispatch(searchIntialize());
      const { data } = await customSearchRequest(keyword);
      dispatch(searchSuccess(data));
    } catch (error) {
      const { data } = error.response;
      dispatch(searchError([data]));
    }
  };
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        successResponse: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    default:
      return state;
  }
};
