import { combineReducers } from 'redux';

import message from './messageReducer';
import auth from './authReducer';
import chat from './chatReducer';

export default combineReducers({
  message,
  auth,
  chat,
});
