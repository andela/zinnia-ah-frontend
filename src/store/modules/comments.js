import { http } from '../../api/client';
import uniqueBy from 'unique-by';

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
  const {
    data: { id: userId },
  } = JSON.parse(localStorage.getItem('userprofile'));
  return userId;
};

export const initialState = {
  isLoading: false,
  userId: getUserId(),
  comments: [
    {
      id: '0c034589-ba07-45fb-b383-9c4e516beb19',
      userId: '0298932c-d9ab-4d32-abca-be92a771ef2c',
      articleId: '141f4f05-7d81-4593-ab54-e256c1006210',
      body: 'My second comment here',
      createdAt: '2019-05-20T19:20:33.191Z',
      updatedAt: '2019-05-20T19:20:33.191Z',
      author: {
        username: 'musonant',
        image: null,
      },
      likes: [
        {
          userId: '0298932c-d9ab-4d31-abca-be92a771ef2c',
          commentId: '0c034589-ba07-45fb-b383-9c4e516beb19',
          createdAt: '2019-05-21T11:46:46.684Z',
          updatedAt: '2019-05-21T11:46:46.684Z',
        },
        {
          userId: '0298932c-d9ab-4d32-abca-be92a771ef2c',
          commentId: '0c034589-ba07-45fb-b383-9c4e516beb19',
          createdAt: '2019-05-21T11:46:46.684Z',
          updatedAt: '2019-05-21T11:46:46.684Z',
        },
      ],
    },
    {
      id: '5d17614e-5a51-47ea-a6eb-63853a4634ee',
      userId: '0298932c-d9ab-4d32-abca-be92a771ef2c',
      articleId: '141f4f05-7d81-4593-ab54-e256c1006210',
      body: 'My first initial comment here',
      createdAt: '2019-05-20T19:25:21.782Z',
      updatedAt: '2019-05-20T19:25:21.782Z',
      author: {
        username: 'musonant',
        image: null,
      },
      likes: [],
    },
  ],
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
