import axios from 'axios';

export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';

const url =
  'https://zinnia-ah-backend-staging.herokuapp.com/api/v1/users/profiles';

export const getUserProfileError = error => ({
  type: GET_PROFILE_ERROR,
  error,
});

export const getUserProfile = profile => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile,
});

export const getUserProfileRequest = username => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(`${url}/${username}`, {
      headers: {
        Authorization: token,
      },
    });
    localStorage.setItem('userprofile', JSON.stringify(res.data));
    return dispatch(getUserProfile(res.data));
  } catch (error) {
    return dispatch(getUserProfileError(error));
  }
};

export const DEFAULT_STATE = {
  profile: {
    data: {
      firstName: '',
      lastName: '',
      bio: '',
      publications: [],
      followings: [],
      followers: [],
    },
  },
  error: {},
  isLoading: true,
};

export const profileReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
