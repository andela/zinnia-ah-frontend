const UPDATE_USER_PROFILE_REQUEST = 'UPDATE_USER_PROFILE_REQUEST';
const UPDATE_USER_PROFILE_ERROR = 'UPDATE_USER_PROFILE_ERROR';
const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';

export default function updateProfileRequest(
  type = null,
  response = null,
  constantType = null,
) {
  switch (type) {
    case null:
      return { type: constantType || UPDATE_USER_PROFILE_REQUEST };

    case 'SUCCESS':
      return {
        type: constantType || UPDATE_USER_PROFILE_SUCCESS,
        payload: response,
      };

    case 'ERROR':
      return {
        type: constantType || UPDATE_USER_PROFILE_ERROR,
        error: response,
      };
  }
}
