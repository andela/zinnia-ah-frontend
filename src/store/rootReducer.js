import { combineReducers } from 'redux';
import { authReducer } from './modules/auth';
import { profileReducer } from './modules/profile';
import { passwordReducer } from './modules/password';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  password: passwordReducer,
});
