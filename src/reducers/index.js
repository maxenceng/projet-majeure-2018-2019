import { combineReducers } from 'redux';

import message from './messageReducer';
import auth from './authReducer';
import chat from './chatReducer';
import event from './eventReducer';

export default combineReducers({
  message,
  auth,
  chat,
  event,
});
