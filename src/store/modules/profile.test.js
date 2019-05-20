import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { http } from '../../api/client';

import {
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  DELETE_ARTICLE_PROCESS,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_ERROR,
  GET_BOOKMARKS_PROCESS,
  GET_BOOKMARKS_SUCCESS,
  GET_BOOKMARKS_ERROR,
  DEFAULT_STATE,
  getUserProfileRequest,
  getUserProfile,
  getUserProfileError,
  deleteArticleProcess,
  deleteArticleSuccess,
  deleteArticleError,
  getBookmarksProcess,
  getBookmarksSuccess,
  getBookmarksError,
  getBookmarks,
  profileReducer,
  deleteArticle,
} from './profile';

const mockStore = configureMockStore([thunk]);

const profile = {
  firstName: 'mr',
  lastName: 'user',
  bio: 'I am the correct user',
  publications: [],
  followings: [],
  followers: [],
  image: 'http://dummyImage.jpg',
  email: 'dummy@user.com',
  username: 'dummyuser',
};

describe('actions', () => {
  it('should create an action to get user profile', () => {
    const expectedAction = {
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
    };
    expect(getUserProfile(profile)).toEqual(expectedAction);
  });

  it('should create an error action if it fails to get user profile', () => {
    const error = '';
    const expectedAction = {
      type: GET_PROFILE_ERROR,
      error,
    };
    expect(getUserProfileError(error)).toEqual(expectedAction);
  });

  it('should get a user profile success case', () => {
    const data = {
      status: 'success',
      message: 'Get profile request successful',
      data: {
        firstName: 'dummy',
        lastName: 'user',
        username: 'dummyuser',
        email: 'dummyy@ah.com',
        bio: '',
        image: 'http://dummyimage.jpg',
        publications: [],
        followers: [],
        followings: [],
      },
    };
    http.get = jest.fn().mockReturnValue(Promise.resolve({ data: data }));

    const username = 'dummy';
    const expectedActions = [
      {
        type: 'GET_PROFILE_SUCCESS',
        publications: [],
        firstName: 'dummy',
        lastName: 'user',
        bio: '',
        followings: [],
        followers: [],
        image: 'http://dummyimage.jpg',
        email: 'dummyy@ah.com',
        username: 'dummyuser',
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(getUserProfileRequest(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail id an unknown error occurs', () => {
    const error = {
      message: 'Get profile request unsuccessful',
      status: 'error',
    };
    const username = 'igbominadeveloper';
    http.get = jest.fn().mockReturnValue(Promise.reject(error));

    const expectedActions = [
      {
        type: 'GET_PROFILE_ERROR',
        error,
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(getUserProfileRequest(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to start an article deleting process', () => {
    const expectedAction = {
      type: DELETE_ARTICLE_PROCESS,
    };
    expect(deleteArticleProcess()).toEqual(expectedAction);
  });

  it('should create an action to successfully delete an article', () => {
    const publications = [];
    const expectedAction = {
      type: DELETE_ARTICLE_SUCCESS,
      publications,
    };
    expect(deleteArticleSuccess(publications)).toEqual(expectedAction);
  });

  it('should create an action to if deleting an article does not succeed', () => {
    const error = {};
    const expectedAction = {
      type: DELETE_ARTICLE_ERROR,
      error,
    };
    expect(deleteArticleError(error)).toEqual(expectedAction);
  });

  it('should dispatch a successful delete action', () => {
    const data = {
      status: '',
      message: '',
    };
    const articleId = '1q2345t6y7u8iokjhbvfr43wsdfghyuikjnbgvfrt56yh';
    const articles = [{}, {}];
    http.delete = jest.fn().mockReturnValue(Promise.resolve({ data: data }));
    const expectedActions = [
      {
        type: 'DELETE_ARTICLE_PROCESS',
      },
      {
        type: 'DELETE_ARTICLE_SUCCESS',
        publications: [{}, {}],
      },
    ];

    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(deleteArticle(articleId, articles)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch an error delete action', () => {
    const data = {
      status: '',
      message: '',
    };
    const articleId = '1q2345t6y7u8iokjhbvfr43wsdfghyuikjnbgvfrt56yh';
    const articles = [{}, {}];
    http.delete = jest.fn().mockReturnValue(Promise.reject({ data: data }));
    const expectedActions = [
      { type: 'DELETE_ARTICLE_PROCESS' },
      {
        type: 'DELETE_ARTICLE_ERROR',
        error: {
          data: {
            status: '',
            message: '',
          },
        },
      },
    ];

    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(deleteArticle(articleId, articles)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to start the action of getting bookmarks', () => {
    const expectedAction = {
      type: GET_BOOKMARKS_PROCESS,
    };
    expect(getBookmarksProcess()).toEqual(expectedAction);
  });

  it('should create an action to complete the action of getting bookmarks', () => {
    const publications = [];
    const expectedAction = {
      type: GET_BOOKMARKS_SUCCESS,
      publications,
    };
    expect(getBookmarksSuccess(publications)).toEqual(expectedAction);
  });

  it('should create an action to if getting bookmarks does not succeed', () => {
    const error = {};
    const expectedAction = {
      type: GET_BOOKMARKS_ERROR,
      error,
    };
    expect(getBookmarksError(error)).toEqual(expectedAction);
  });

  it('should dispatch a successful get-bookmarks action', () => {
    const data = {
      status: '',
      message: '',
      data: {
        bookmarks: [{}],
      },
    };
    http.get = jest.fn().mockReturnValue(Promise.resolve({ data: data }));
    const expectedActions = [
      {
        type: 'GET_BOOKMARKS_PROCESS',
      },
      {
        type: 'GET_BOOKMARKS_SUCCESS',
        publications: [{}],
      },
    ];

    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(getBookmarks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch an error action if get-bookmark fails', () => {
    const data = {
      status: '',
      message: '',
    };

    http.get = jest.fn().mockReturnValue(Promise.reject({ data: data }));
    const expectedActions = [
      { type: 'GET_BOOKMARKS_PROCESS' },
      {
        type: 'GET_BOOKMARKS_ERROR',
        error: {
          data: {
            status: '',
            message: '',
          },
        },
      },
    ];

    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(getBookmarks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('reducers', () => {
  it('should return the default state ', () => {
    const state = profileReducer(DEFAULT_STATE, {
      type: 'unknown',
    });
    expect(state).toEqual(DEFAULT_STATE);
  });

  it('should return the profile', () => {
    const action = getUserProfile(profile);
    const state = profileReducer(DEFAULT_STATE, action);
    expect(state.profile).toEqual(action.profile);
    expect(state.isLoading).toEqual(false);
  });

  it('should return an error if any on getting a profile', () => {
    const action = getUserProfileError();
    const state = profileReducer(DEFAULT_STATE, action);
    expect(state.error).toEqual(action.error);
    expect(state.isLoading).toEqual(false);
  });

  it('should return a state when the process to delete an article has begun', () => {
    const action = deleteArticleProcess();
    const state = profileReducer(DEFAULT_STATE, action);
    expect(state.isDeleting).toEqual(true);
  });

  it('should return a state when an article has been successfully deleted', () => {
    const action = deleteArticleSuccess();
    const state = profileReducer(DEFAULT_STATE, action);
    expect(state.publications).toEqual(action.publications);
    expect(state.isDeleting).toEqual(false);
  });

  it('should return an error state when the an article has not been successfully deleted', () => {
    const action = deleteArticleError();
    const state = profileReducer(DEFAULT_STATE, action);
    expect(state.error).toEqual(action.error);
    expect(state.isDeleting).toEqual(false);
  });

  it('should return a state when the process to get users bookmarks has begun', () => {
    const action = getBookmarksProcess();
    const state = profileReducer(DEFAULT_STATE, action);
    expect(state.isLoading).toEqual(true);
  });

  it('should return a state when bookmarks has been successfully gotten', () => {
    const action = getBookmarksSuccess();
    const state = profileReducer(DEFAULT_STATE, action);
    expect(state.bookmarks).toEqual(action.publications);
    expect(state.isLoading).toEqual(false);
  });

  it('should return an error state when when bookmarks has not been successfully gotten', () => {
    const action = getBookmarksError();
    const state = profileReducer(DEFAULT_STATE, action);
    expect(state.error).toEqual(action.error);
    expect(state.isLoading).toEqual(false);
  });
});
