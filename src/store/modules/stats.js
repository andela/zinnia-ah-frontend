import { getReadingStats } from '../../api/client';

export const GET_STATS_SUCCESS = 'GET_STATS_SUCCESS';
export const GET_STATS_ERROR = 'GET_STATS_ERROR';

export const getUserStats = response => {
  return {
    type: GET_STATS_SUCCESS,
    response,
  };
};

export const getStatsError = error => {
  return {
    type: GET_STATS_ERROR,
    error,
  };
};

export const getUserReadingStats = username => {
  return async dispatch => {
    try {
      const { data } = await getReadingStats(username);
      localStorage.setItem('userprofile', JSON.stringify(data));
      dispatch(getUserStats(data));
    } catch (error) {
      const { data } = error.response;
      dispatch(getStatsError([data]));
    }
  };
};

export const initialState = {
  isLoading: false,
  errorResponse: [],
  successResponse: {},
};

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        successResponse: action.response,
        errorResponse: [],
      };
    case GET_STATS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };
    default:
      return state;
  }
};
