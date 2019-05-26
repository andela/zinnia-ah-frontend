import { combineReducers } from 'redux';
import { authReducer } from './modules/auth';
import { profileReducer } from './modules/profile';
import { articleReducer } from './modules/article';
import { passwordReducer } from './modules/password';
import { commentReducer } from './modules/comments';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  password: passwordReducer,
  article: articleReducer,
  comments: commentReducer,
});
