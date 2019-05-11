import { combineReducers } from 'redux';
import { authReducer } from './modules/auth';
import { profileReducer } from './modules/profile';

export default combineReducers({ auth: authReducer, profile: profileReducer });
