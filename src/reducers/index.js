import { combineReducers } from 'redux';

import message from './messageReducer';
import user from './userReducer';
import profile from './profileReducer';

export default combineReducers({
  message,
  user,
  profile,
});
