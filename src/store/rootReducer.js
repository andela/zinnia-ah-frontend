import { combineReducers } from 'redux';
import { authReducer } from './modules/auth';
import { profileReducer } from './modules/profile';
import { passwordReducer } from './modules/password';
import { starRatingReducer } from './modules/starRating';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  password: passwordReducer,
  starRating: starRatingReducer,
});
