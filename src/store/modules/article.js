import { toast } from 'react-toastify';

import { http } from '../../api/client';

export const RATE_ARTICLE_SUCCESS = 'RATE_ARTICLE_SUCCESS';
export const RATE_ARTICLE_ERROR = 'RATE_ARTICLE_ERROR';

export const rateArticleSuccess = (rating, averageRating) => {
  return {
    type: RATE_ARTICLE_SUCCESS,
    value: {
      rating,
      averageRating,
    },
  };
};

export const rateArticleError = () => {
  return {
    type: RATE_ARTICLE_ERROR,
  };
};

export const starRating = (rating, articleId) => {
  console.log(articleId);
  return async dispatch => {
    try {
      const response = await http.post(
        `/articles/141f4f05-7d81-4593-ab54-e256c1006210/rate`,
        {
          rating,
        },
      );
      const averageRating = response.data.data.averageRating;
      dispatch(rateArticleSuccess(rating, averageRating));
    } catch (error) {
      dispatch(rateArticleError());
      toast.error('Rating was unsuccessful!');
    }
  };
};

const initialState = {
  rating: 0,
  averageRating: null,
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case RATE_ARTICLE_SUCCESS:
      return {
        ...state,
        rating: action.value.rating,
        averageRating: action.value.averageRating,
      };
    case RATE_ARTICLE_ERROR:
      return {
        ...state,
        rating: 0,
      };
    default:
      return state;
  }
};
