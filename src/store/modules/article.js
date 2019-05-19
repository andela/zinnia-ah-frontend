import { articleRequest, fetchArticle } from '../../api/article';

//constants
export const CREATE_ARTCLE_INITIALIZED = 'CREATE_ARTCLE_INITIALIZED';
export const CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_ERROR = 'CREATE_ARTICLE_ERROR';

export const FETCH_ARTICLE_START = 'FETCH_ARTICLE_START';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';

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

export const getArticleStart = () => {
  return {
    type: FETCH_ARTICLE_START,
  };
};

export const getArticleSuccess = article => {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    article,
  };
};

export const getArticleFailure = error => {
  return {
    type: FETCH_ARTICLE_FAILURE,
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

export const getSingleArticle = uniqueId => {
  return async dispatch => {
    dispatch(getArticleStart());
    try {
      const { data } = await fetchArticle(uniqueId);
      dispatch(getArticleSuccess(data));
    } catch (error) {
      dispatch(getArticleFailure(error));
    }
  };
};
export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_START:
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

    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        article: action.article,
      };

    case FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
