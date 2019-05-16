import { combineReducers } from 'redux';
import { authReducer } from './modules/auth';
import { profileReducer } from './modules/profile';
import { articleReducer } from './modules/article';
import { passwordReducer } from './modules/password';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  article: articleReducer,
  password: passwordReducer,
});
