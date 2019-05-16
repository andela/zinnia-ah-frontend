import { getReadingStats } from '../../api/users';
import { getToken, decodeToken } from '../../api/helpers';

export const GET_READS_COUNT = 'GET_READS_COUNT';
export const GET_HITS_COUNT = 'GET_HITS_COUNT';
export const GET_STATS_ERROR = 'GET_STATS_ERROR';

export const getUserReadStats = data => {
  return {
    type: GET_READS_COUNT,
    data,
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
          data: { count, rows },
        },
      } = await getReadingStats();
      const token = getToken();
      const { id } = decodeToken(token);
      // console.log(rows[0].article.userId);
      const hits = rows.filter(row => row.article.userId === id);
      const reads = rows.filter(row => row.article.userId !== id);

      dispatch(
        getUserReadStats({ count, articles: rows, stats: { hits, reads } }),
      );
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
        hits: action.data.stats.hits,
        reads: action.data.stats.reads,
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
