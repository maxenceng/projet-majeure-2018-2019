import { combineReducers } from 'redux';

import auth from './authReducer';
import message from './messageReducer';
import conversation from './conversationReducer';
import event from './eventReducer';
import profile from './profileReducer';
import connectionStatus from './connectionStatusReducer';
import currentConv from './currentConvReducer';

export default combineReducers({
  auth,
  message,
  conversation,
  event,
  profile,
  connectionStatus,
  currentConv,
});
