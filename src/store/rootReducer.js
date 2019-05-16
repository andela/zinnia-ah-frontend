import { combineReducers } from 'redux';
import { authReducer } from './modules/auth';
import { profileReducer } from './modules/profile';
import { passwordReducer } from './modules/password';
import { articleReducer } from './modules/article';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  password: passwordReducer,
  article: articleReducer,
});
