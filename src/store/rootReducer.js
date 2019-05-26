import { combineReducers } from 'redux';
import { authReducer } from './modules/auth';
import { profileReducer } from './modules/profile';
import { articleReducer } from './modules/article';
import { passwordReducer } from './modules/password';
import { starRatingReducer } from './modules/starRating';
import { tagReducer } from './modules/tag';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  article: articleReducer,
  password: passwordReducer,
  starRating: starRatingReducer,
  tag: tagReducer,
});
