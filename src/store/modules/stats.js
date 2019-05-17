import { getReadingStats } from '../../api/users';
import { getToken, decodeToken } from '../../api/helpers';

export const GET_READS_COUNT = 'GET_READS_COUNT';
export const GET_HITS_COUNT = 'GET_HITS_COUNT';
export const GET_STATS_ERROR = 'GET_STATS_ERROR';

export const getUserReadStats = (hits, reads) => {
  return {
    type: GET_READS_COUNT,
    hits,
    reads,
  };
};

export const getStatsError = error => {
  return {
    type: GET_STATS_ERROR,
    error,
  };
};

export const getUserReadingStats = () => {
  return async dispatch => {
    try {
      const {
        data: {
          data: { rows },
        },
      } = await getReadingStats();
      const token = getToken();
      const { id } = decodeToken(token);
      const hits = rows.filter(row => row.article.userId === id);
      const reads = rows.filter(row => row.article.userId !== id);

      dispatch(getUserReadStats(hits, reads));
    } catch (error) {
      const { data } = error.response;
      dispatch(getStatsError([data]));
    }
  };
};

export const initialState = {
  hits: [],
  reads: [],
};

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_READS_COUNT:
      return {
        ...state,
        hits: action.hits,
        reads: action.reads,
      };
    case GET_STATS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
