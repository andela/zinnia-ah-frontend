import { toast } from 'react-toastify';

import { getProfileRequest, deleteArticleRequest } from '../../api/profile';

export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const DELETE_ARTICLE_PROCESS = 'DELETE_ARTICLE_PROCESS';
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
export const DELETE_ARTICLE_ERROR = 'DELETE_ARTICLE_ERROR';

export const getUserProfileError = error => ({
  type: GET_PROFILE_ERROR,
  error,
});

export const getUserProfile = profile => ({
  type: GET_PROFILE_SUCCESS,
  publications: profile.publications,
  firstName: profile.firstName,
  lastName: profile.lastName,
  bio: profile.bio,
  followings: profile.followings,
  followers: profile.followers,
  image: profile.image,
  email: profile.email,
  username: profile.username,
});

export const deleteArticleProcess = () => ({
  type: DELETE_ARTICLE_PROCESS,
});

export const deleteArticleSuccess = publications => ({
  type: DELETE_ARTICLE_SUCCESS,
  publications,
});

export const deleteArticleError = error => ({
  type: DELETE_ARTICLE_ERROR,
  error,
});

export const getUserProfileRequest = username => async dispatch => {
  try {
    const res = await getProfileRequest(username);
    localStorage.setItem('userprofile', JSON.stringify(res.data));
    dispatch(getUserProfile(res.data.data));
  } catch (error) {
    return dispatch(getUserProfileError(error));
  }
};

export const deleteArticle = (articleId, articles) => async dispatch => {
  try {
    const newArticles = articles.filter(article => article.id !== articleId);
    dispatch(deleteArticleProcess());
    await deleteArticleRequest(articleId);
    dispatch(deleteArticleSuccess(newArticles));
    toast.success('Article has been successfully deleted');
  } catch (error) {
    dispatch(deleteArticleError(error));
    toast.error(error.message);
  }
};

export const DEFAULT_STATE = {
  firstName: '',
  lastName: '',
  bio: '',
  publications: [],
  followings: [],
  followers: [],
  image: '',
  email: '',
  username: '',
  error: {},
  isLoading: true,
  isDeleting: false,
};

export const profileReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        publications: action.publications,
        firstName: action.firstName,
        lastName: action.lastName,
        bio: action.bio,
        followings: action.followings,
        followers: action.followers,
        image: action.image,
        email: action.email,
        username: action.username,
        isLoading: false,
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case DELETE_ARTICLE_PROCESS:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        publications: action.publications,
      };
    case DELETE_ARTICLE_ERROR:
      return {
        ...state,
        error: action.error,
        isDeleting: false,
      };
    default:
      return state;
  }
};
