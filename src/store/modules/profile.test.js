import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import {
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  DEFAULT_STATE,
  getUserProfileRequest,
  getUserProfile,
  getUserProfileError,
  profileReducer,
} from './profile';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const profile = {};

describe('actions', () => {
  it('should create an action to get user profile', () => {
    const expectedAction = {
      type: GET_PROFILE_SUCCESS,
      payload: profile,
    };
    expect(getUserProfile(profile)).toEqual(expectedAction);
  });

  it('should create an action to get user profile', () => {
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
        followers: [],
        followings: [],
      },
    };
    axios.get = jest.fn().mockReturnValue(
      Promise.resolve({
        data: data,
      }),
    );

    const expectedActions = [
      {
        type: 'GET_PROFILE_SUCCESS',
        payload: data,
      },
    ];

    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(getUserProfileRequest()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail id an unknown error occurs', () => {
    const error = {
      message: 'Get profile request unsuccessful',
      status: 'error',
    };

    axios.get = jest.fn().mockReturnValue(Promise.reject(error));

    const expectedActions = [
      {
        type: 'GET_PROFILE_ERROR',
        error,
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(getUserProfileRequest()).then(() => {
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
    const action = getUserProfile();
    const state = profileReducer(DEFAULT_STATE, action);
    expect(state.profile).toEqual(action.profile);
    expect(state.isLoading).toEqual(false);
  });

  it('should return an error if any', () => {
    const action = getUserProfileError();
    const state = profileReducer(DEFAULT_STATE, action);
    expect(state.error).toEqual(action.error);
    expect(state.isLoading).toEqual(false);
  });
});
