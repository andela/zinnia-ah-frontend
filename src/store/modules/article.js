import { articleRequest, likeArticleRequest } from '../../api/article';

//constants
export const CREATE_ARTCLE_INITIALIZED = 'CREATE_ARTCLE_INITIALIZED';
export const CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_ERROR = 'CREATE_ARTICLE_ERROR';
export const LIKE_ARTCLE_INITIALIZED = 'LIKE_ARTCLE_INITIALIZED';
export const LIKE_ARTICLE_SUCCESS = 'LIKE_ARTICLE_SUCCESS';
export const LIKE_ARTICLE_ERROR = 'LIKE_ARTICLE_ERROR';

export const createArticleInitialized = () => {
  return {
    type: CREATE_ARTCLE_INITIALIZED,
  };
};

export const createArticleSuccess = response => {
  return {
    type: CREATE_ARTICLE_SUCCESS,
    response,
  };
};

export const createArticleError = error => {
  return {
    type: CREATE_ARTICLE_ERROR,
    error,
  };
};

export const likeArticleInitialized = () => {
  return {
    type: LIKE_ARTCLE_INITIALIZED,
  };
};

export const likeArticleSuccess = response => {
  return {
    type: LIKE_ARTICLE_SUCCESS,
    response,
  };
};

export const likeArticleError = error => {
  return {
    type: LIKE_ARTICLE_ERROR,
    error,
  };
};

export const initialState = {
  isLoading: false,
  errorResponse: [],
  successResponse: {
    status: '',
  },
};

export const createArticle = articleData => {
  return async dispatch => {
    try {
      dispatch(createArticleInitialized());
      const { data } = await articleRequest(articleData);
      dispatch(createArticleSuccess(data));
    } catch (error) {
      const { data } = error.response;
      dispatch(createArticleError([data]));
    }
  };
};

export const likeArticle = action => {
  return async dispatch => {
    try {
      dispatch(likeArticleInitialized());
      const { data } = await likeArticleRequest(action);
      dispatch(likeArticleSuccess(data));
    } catch (error) {
      const { data } = error.response;
      dispatch(likeArticleError([data]));
    }
  };
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ARTCLE_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        successResponse: action.response,
        isLoading: false,
        errorResponse: [],
      };
    case CREATE_ARTICLE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    case LIKE_ARTCLE_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case LIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        successResponse: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case LIKE_ARTICLE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    default:
      return state;
  }
};
