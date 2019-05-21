import { fetchArticlePaginationRequest } from '../../api/article';

//constants
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const FETCH_ARTICLE_ERROR = 'FETCH_ARTICLE_ERROR';

export const fetchArticleSuccess = response => {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    response,
  };
};

export const fetchArticleError = error => {
  return {
    type: FETCH_ARTICLE_ERROR,
    error,
  };
};

export const fetchArticlePagination = pageNo => {
  return async dispatch => {
    try {
      const { data } = await fetchArticlePaginationRequest(pageNo);
      if (data.data.rows.length === 0) {
        return dispatch(fetchArticleError('no more article to load'));
      }
      return dispatch(fetchArticleSuccess(data.data.rows));
    } catch (error) {
      dispatch(fetchArticleError(error.message));
    }
  };
};

export const DEFAULT_STATE = {
  publications: [],
  errorResponse: {},
  isLoading: true,
};

export const articleReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        publications: [...state.publications, ...action.response],
        isLoading: false,
        errorResponse: [],
      };

    case FETCH_ARTICLE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    default:
      return state;
  }
};
