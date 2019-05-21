import { combineReducers } from 'redux';
import { authReducer } from './modules/auth';
import { profileReducer } from './modules/profile';
import { articleReducer } from './modules/article';
import { passwordReducer } from './modules/password';
import { searchReducer } from './modules/search';
import { starRatingReducer } from './modules/starRating';
import { tagReducer } from './modules/tag';
import { commentReducer } from './modules/comments';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  article: articleReducer,
  password: passwordReducer,
  starRating: starRatingReducer,
  tag: tagReducer,
  search: searchReducer,
  comments: commentReducer,
});
