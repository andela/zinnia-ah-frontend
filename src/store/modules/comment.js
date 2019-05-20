import { http } from '../../api/client';

export const LIKE_COMMENT_ERROR = 'LIKE_COMMENT_ERROR';
export const LIKE_COMMENT_SUCCESS = 'LIKE_COMMENT_SUCCESS';

export const likeCommentError = error => ({
  type: LIKE_COMMENT_ERROR,
  error,
});

export const likeCommentSuccess = response => ({
  type: LIKE_COMMENT_SUCCESS,
  response,
});

export const likeCommentRequest = (articleId, commentId) => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    const res = await http.post(
      `/articles/${articleId}/comments/${commentId}/like`,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    if (res.message === 'You have liked this post') {
      return dispatch(likeCommentSuccess(true));
    }
    return dispatch(likeCommentSuccess(false));
  } catch (error) {
    return dispatch(likeCommentError(error));
  }
};

export const DEFAULT_STATE = {
  isLiked: false,
  error: {},
  isLoading: true,
};

export const commentReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LIKE_COMMENT_SUCCESS:
      return {
        ...state,
        isLiked: action.response,
        isLoading: false,
      };
    case LIKE_COMMENT_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
