import { combineReducers } from 'redux';

import auth from './authReducer';
import chat from './chatReducer';
import event from './eventReducer';
import profile from './profileReducer';
import connectionStatus from './connectionStatusReducer';
import idEvent from './currentEventReducer';

export default combineReducers({
  auth,
  chat,
  event,
  profile,
  connectionStatus,
  idEvent,
});
