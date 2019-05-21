import { toast } from 'react-toastify';

import { http } from '../../api/client';
import {
  getProfileRequest,
  deleteArticleRequest,
  getBookmarksRequest,
  getPopularAuthorsRequest,
  postFollowAuthor,
} from '../../api/profile';

export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const DELETE_ARTICLE_PROCESS = 'DELETE_ARTICLE_PROCESS';
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
export const DELETE_ARTICLE_ERROR = 'DELETE_ARTICLE_ERROR';
export const UPDATE_USER_PROFILE_ERROR = 'UPDATE_USER_PROFILE_ERROR';
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
export const UPDATE_IMAGE_ERROR = 'UPDATE_IMAGE_ERROR';
export const UPDATE_IMAGE_SUCCESS = 'UPDATE_IMAGE_SUCCESS';
export const GET_BOOKMARKS_PROCESS = 'GET_BOOKMARKS_PROCESS';
export const GET_BOOKMARKS_SUCCESS = 'GET_BOOKMARKS_SUCCESS';
export const GET_BOOKMARKS_ERROR = 'GET_BOOKMARKS_ERROR';
export const GET_POPULAR_AUTHORS_SUCCESS = 'GET_POPULAR_AUTHORS_SUCCESS';
export const GET_POPULAR_AUTHORS_ERROR = 'GET_POPULAR_AUTHORS_ERROR';
export const FOLLOW_AUTHOR_PROCESS = 'FOLLOW_AUTHOR_PROCESS';
export const FOLLOW_AUTHOR_SUCCESS = 'FOLLOW_AUTHOR_SUCCESS';
export const FOLLOW_AUTHOR_ERROR = 'FOLLOW_AUTHOR_ERROR';

export const getUserProfileError = error => ({
  type: GET_PROFILE_ERROR,
  error,
});

export const getUserProfile = profile => ({
  type: GET_PROFILE_SUCCESS,
  publications: profile.publications,
  id: profile.id,
  firstName: profile.firstName,
  lastName: profile.lastName,
  bio: profile.bio,
  followings: profile.followings,
  followers: profile.followers,
  image: profile.image,
  email: profile.email,
  username: profile.username,
  updatedAt: profile.updatedAt,
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

export const getBookmarksProcess = () => ({
  type: GET_BOOKMARKS_PROCESS,
});

export const getBookmarksSuccess = publications => ({
  type: GET_BOOKMARKS_SUCCESS,
  publications,
});

export const getBookmarksError = error => ({
  type: GET_BOOKMARKS_ERROR,
  error,
});

export const updateUserProfileError = error => ({
  type: UPDATE_USER_PROFILE_ERROR,
  error,
});

export const updateUserProfile = profile => ({
  type: UPDATE_USER_PROFILE_SUCCESS,
  ...profile,
});

export const getPopularAuthorsSuccess = authors => ({
  type: GET_POPULAR_AUTHORS_SUCCESS,
  authors,
});

export const getPopularAuthorsError = error => ({
  type: GET_POPULAR_AUTHORS_ERROR,
  error,
});

export const followAuthorProcess = () => ({
  type: FOLLOW_AUTHOR_PROCESS,
});

export const followAuthorSuccess = response => ({
  type: FOLLOW_AUTHOR_SUCCESS,
  response: response.data.followers,
});

export const followAuthorError = () => ({
  type: FOLLOW_AUTHOR_ERROR,
});

export const getUserProfileRequest = username => async dispatch => {
  try {
    const res = await getProfileRequest(username);
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

export const updateUserProfileRequest = formData => async dispatch => {
  try {
    const { data } = await http.put('/users/profile/', formData);
    if (data.status === 'success') {
      toast.success('Profile updated successfully');
      return dispatch(updateUserProfile(data.data));
    }
    toast.error('Sorry could not updated profile');
    return dispatch(updateUserProfileError(data.message));
  } catch (error) {
    return error.response;
  }
};

export const getBookmarks = () => async dispatch => {
  try {
    dispatch(getBookmarksProcess());
    const { data } = await getBookmarksRequest();
    dispatch(getBookmarksSuccess(data.data.bookmarks));
  } catch (error) {
    dispatch(getBookmarksError(error));
  }
};

export const getPopularAuthors = () => async dispatch => {
  try {
    const { data } = await getPopularAuthorsRequest();
    dispatch(getPopularAuthorsSuccess(data.data));
  } catch (error) {
    dispatch(getPopularAuthorsError(error));
  }
};

export const followAuthorRequest = (
  followState,
  username,
) => async dispatch => {
  try {
    dispatch(followAuthorProcess());
    const { data } = await postFollowAuthor(followState, username);
    dispatch(followAuthorSuccess(data));
  } catch (error) {
    dispatch(followAuthorError());
    toast.error(`${followState} request was unsuccessful`);
  }
};

export const DEFAULT_STATE = {
  id: '',
  firstName: '',
  lastName: '',
  bio: '',
  publications: [],
  followings: [],
  followers: [],
  bookmarks: [],
  image: '',
  email: '',
  username: '',
  updatedAt: '',
  error: {},
  isLoading: true,
  isButtonLoading: false,
  isDeleting: false,
  isGettingPopularAuthorsLoading: true,
  authors: [],
};

export const profileReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
    case UPDATE_USER_PROFILE_SUCCESS:
    case UPDATE_IMAGE_SUCCESS:
      return {
        ...state,
        publications: action.publications,
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        bio: action.bio,
        followings: action.followings,
        followers: action.followers,
        image: action.image,
        email: action.email,
        username: action.username,
        updatedAt: action.updatedAt,
        isLoading: false,
      };
    case GET_PROFILE_ERROR:
    case UPDATE_USER_PROFILE_ERROR:
    case UPDATE_IMAGE_ERROR:
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
    case GET_BOOKMARKS_PROCESS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BOOKMARKS_SUCCESS:
      return {
        ...state,
        bookmarks: action.publications,
        isLoading: false,
      };
    case GET_BOOKMARKS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case GET_POPULAR_AUTHORS_SUCCESS:
      return {
        ...state,
        isGettingPopularAuthorsLoading: false,
        authors: action.authors,
      };
    case GET_POPULAR_AUTHORS_ERROR:
      return {
        ...state,
        isGettingPopularAuthorsLoading: false,
        error: action.error,
      };
    case FOLLOW_AUTHOR_PROCESS:
      return {
        ...state,
        isButtonLoading: true,
      };
    case FOLLOW_AUTHOR_SUCCESS:
      return {
        ...state,
        followers: action.response,
        isButtonLoading: false,
      };
    case FOLLOW_AUTHOR_ERROR:
      return {
        ...state,
        isButtonLoading: false,
      };
    default:
      return state;
  }
};
