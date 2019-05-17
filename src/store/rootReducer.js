import { combineReducers } from 'redux';
import { authReducer } from './modules/auth';
import { profileReducer } from './modules/profile';
import { statsReducer } from './modules/stats';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  stats: statsReducer,
});
