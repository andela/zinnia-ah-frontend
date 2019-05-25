import { starRatingReducer } from './starRating';
import { RATE_ARTICLE_SUCCESS } from './starRating';

describe('Article Reducer', () => {
  it('should return default state', () => {
    const newState = starRatingReducer(undefined, {});
    expect(newState).toEqual({
      rating: 0,
      averageRating: null,
    });
  });

  it('should return new state if receiving type', () => {
    const ratings = { rating: 2, averageRating: 4 };
    const newState = starRatingReducer(undefined, {
      type: RATE_ARTICLE_SUCCESS,
      value: {
        rating: ratings.rating,
        averageRating: ratings.averageRating,
      },
    });
    expect(newState).toEqual;
  });
});
