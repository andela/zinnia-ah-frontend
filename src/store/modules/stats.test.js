import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  GET_STATS_ERROR,
  GET_STATS_SUCCESS,
  initialState,
  getUserStats,
  getStatsError,
  statsReducer,
  getUserReadingStats,
} from './stats';
import { http } from '../../api/client';

const mockStore = configureStore([thunk]);
const store = mockStore(initialState);
const mockData = {
  status: 'success',
  message: 'reading stats',
  data: {
    count: 0,
    rows: [],
  },
};
describe('stats actions', () => {
  it('should dispatch an action for getting reading stats', () => {
    const response = {};
    const action = {
      type: GET_STATS_SUCCESS,
      response,
    };
    expect(getUserStats(response)).toEqual(action);
  });
  it('should dispatch an action for reading stats error', () => {
    const error = '';
    const action = {
      type: GET_STATS_ERROR,
      error,
    };
    expect(getStatsError(error)).toEqual(action);
  });
  it('should dispatch a successful user reading stats action', () => {
    http.get = jest.fn().mockReturnValue(Promise.resolve({ data: mockData }));
    const expectedActions = [
      {
        type: 'GET_STATS_SUCCESS',
        response: mockData,
      },
    ];
    return store.dispatch(getUserReadingStats()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch a failed user reading stats action', () => {
    http.get = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error('something bad happened')));
    const errorActions = [{ type: 'GET_STATS_ERROR' }];
    store.dispatch(getUserReadingStats()).then(() => {
      expect(store.getActions()).toEqual(errorActions);
    });
  });
});

describe('reading stats reducer test suite', () => {
  it('should return default state', () => {
    const state = statsReducer(initialState, { type: '' });
    expect(state).toEqual(initialState);
  });
  it('should return successful user stats reducer', () => {
    const action = getUserStats();
    const state = statsReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.successResponse).toEqual(action.response);
  });
  it('should return failed user stats reducer', () => {
    const action = getStatsError();
    const state = statsReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errorResponse).toEqual(action.error);
  });
});
