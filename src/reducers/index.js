import { combineReducers } from 'redux';

import auth from './authReducer';
import message from './messageReducer';
import conversation from './conversationReducer';
import event from './eventReducer';
import profile from './profileReducer';
import connectionStatus from './connectionStatusReducer';
import idEvent from './currentEventReducer';
import participant from './participantReducer';
import userEvents from './userEventsReducer';
import interested from './interestedEventReducer';
import location from './locationReducer';
import participation from './participateEventReducer';
import favorite from './favoriteEventReducer';
import currentConv from './currentConvReducer';
import eventMode from './switchEventModeReducer';

export default combineReducers({
  auth,
  message,
  conversation,
  event,
  profile,
  connectionStatus,
  idEvent,
  participant,
  participation,
  favorite,
  userEvents,
  currentConv,
  interested,
  location,
  eventMode,
});
