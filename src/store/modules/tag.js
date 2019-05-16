import { getAllTagsRequest, getAllArticlesByTagRequest } from '../../api/tag';

export const GET_ALL_TAGS_SUCCCESS = 'GET_ALL_TAGS_SUCCCESS';
export const GET_ALL_TAGS_ERROR = 'GET_ALL_TAGS_ERROR';
export const GET_ARTICLE_BY_TAG_PROCESS = 'GET_ARTICLE_BY_TAG_PROCESS';
export const GET_ARTICLE_BY_TAG_SUCCESS = 'GET_ARTICLE_BY_TAG_SUCCESS';
export const GET_ARTICLE_BY_TAG_ERROR = 'GET_ARTICLE_BY_TAG_ERROR';

export const getAllTagsSuccess = tags => ({
  type: GET_ALL_TAGS_SUCCCESS,
  tags,
});

export const getAllTagsError = error => ({
  type: GET_ALL_TAGS_ERROR,
  error,
});

export const getArticleByTagProcess = () => ({
  type: GET_ARTICLE_BY_TAG_PROCESS,
});

export const getArticleByTagSuccess = articles => ({
  type: GET_ARTICLE_BY_TAG_SUCCESS,
  articles,
});

export const getArticleByTagError = error => ({
  type: GET_ARTICLE_BY_TAG_ERROR,
  error,
});

export const getAllTags = () => async dispatch => {
  try {
    const { data } = await getAllTagsRequest();
    dispatch(getAllTagsSuccess(data.data));
  } catch (error) {
    dispatch(getAllTagsError(error));
  }
};

export const getArticleByTag = name => async dispatch => {
  try {
    dispatch(getArticleByTagProcess());
    const { data } = await getAllArticlesByTagRequest(name);
    dispatch(getArticleByTagSuccess(data.data.articles));
  } catch (error) {
    dispatch(getArticleByTagError(error));
  }
};

export const DEFAULT_STATE = {
  tags: [],
  articles: [],
  error: {},
  isLoading: true,
};

export const tagReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TAGS_SUCCCESS:
      return {
        ...state,
        tags: action.tags,
        isLoading: false,
      };
    case GET_ARTICLE_BY_TAG_PROCESS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ARTICLE_BY_TAG_SUCCESS:
      return {
        ...state,
        articles: action.articles,
        isLoading: false,
      };
    case GET_ARTICLE_BY_TAG_ERROR:
    case GET_ALL_TAGS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
