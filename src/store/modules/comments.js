import { http } from '../../api/client';
import uniqueBy from 'unique-by';
import { decodeToken, getToken } from '../../api/helpers';

export const SAVE_COMMENTS = 'SAVE_COMMENTS';
export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';
export const REQUEST_PROCESSING = 'REQUEST_PROCESSING';
export const COMMENT_REACTION_REQUEST = 'COMMENT_REACTION_REQUEST';
export const UNLIKE_COMMENT_REQUEST = 'UNLIKE_REACTION_REQUEST';
export const COMMENT_REACTION_SUCCESS = 'COMMENT_REACTION_SUCCESS';
export const COMMENT_REACTION_ERROR = 'COMMENT_REACTION_ERROR';

export const saveComments = comments => ({
  type: SAVE_COMMENTS,
  comments,
});

export const createCommentError = error => ({
  type: CREATE_COMMENT_ERROR,
  error,
});

export const commentReactionSuccess = (comments, commentId, reaction) => ({
  type: COMMENT_REACTION_SUCCESS,
  comments,
  commentId,
  reaction,
});

export const commentReactionError = error => ({
  type: COMMENT_REACTION_ERROR,
  error,
});

const updateLikes = (comments, commentId, reaction) => {
  const addLike = likes => {
    likes.push({
      userId: getUserId(),
      commentId,
    });
    return likes;
  };

  const removeLike = likes => {
    return likes.filter(like => {
      like.userId !== getUserId();
    });
  };

  comments.forEach(comment => {
    if (comment.id === commentId) {
      comment.likes =
        reaction === 'like'
          ? addLike(comment.likes)
          : removeLike(comment.likes);
    }
  });

  return comments;
};

export const reactToComment = options => async dispatch => {
  const { comments, commentId, articleId } = options;

  try {
    const { data } = await http.post(
      `/articles/${articleId}/comments/${commentId}/like`,
    );
    if (data.message === 'You have liked this post') {
      return dispatch(commentReactionSuccess(comments, commentId, 'like'));
    }
    dispatch(commentReactionSuccess(comments, commentId, 'unlike'));
  } catch (error) {
    dispatch(commentReactionError(error.response));
  }
};

export const requestProcessing = () => ({
  type: REQUEST_PROCESSING,
});

export const createComment = data => async dispatch => {
  dispatch(requestProcessing());
  const { articleId, comment } = data;
  try {
    const {
      data: {
        data: { comment: createdComment },
      },
    } = await http.post(`/articles/${articleId}/comments`, {
      comment,
    });

    createdComment.articleId = articleId;
    createdComment.likes = [];
    return dispatch(saveComments([createdComment]));
  } catch (error) {
    return dispatch(createCommentError(error.response));
  }
};

const getUserId = () => {
  const user = decodeToken(getToken()) || { id: '' };
  return user.id;
};

export const initialState = {
  isLoading: false,
  userId: getUserId(),
  comments: [],
};
export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COMMENTS:
      return {
        ...state,
        isLoading: false,
        comments: uniqueBy([...state.comments, ...action.comments], 'id'),
      };
    case REQUEST_PROCESSING:
      return { ...state, isLoading: true };
    case COMMENT_REACTION_SUCCESS:
      return {
        ...state,
        comments: updateLikes(
          action.comments,
          action.commentId,
          action.reaction,
        ),
      };
    default:
      return state;
  }
};
