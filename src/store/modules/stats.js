import { getReadingStats } from '../../api/users';
import { setToken } from '../../api/helpers';

export const GET_READS_COUNT = 'GET_READS_COUNT';
export const GET_HITS_COUNT = 'GET_HITS_COUNT';
export const GET_STATS_ERROR = 'GET_STATS_ERROR';

export const getUserReadStats = count => {
  return {
    type: GET_READS_COUNT,
    count,
  };
};

export const getUserHitStats = count => {
  return {
    type: GET_HITS_COUNT,
    count,
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
      // setToken(data.data.token);
      // console.log(setToken);
      const { data } = await getReadingStats(username);
      setToken(data.data.token);
      // console.log(data.data.rows);
      const count = data.data.count;
      // let Reads, Hits;
      // // rows = 'array of articles'
      // rows.forEach(article => {
      //   if (article.userId === username) {
      //     const Reads =
      //   };

      // });

      // localStorage.setItem('userprofile', JSON.stringify(data));
      dispatch(getUserReadStats(count));
    } catch (error) {
      const { data } = error.response;
      dispatch(getStatsError([data]));
    }
  };
};

export const initialState = {
  count: 0,
  rows: [],
};

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_READS_COUNT:
      return {
        ...state,
        response: action.count,
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
