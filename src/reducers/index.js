import { combineReducers } from 'redux';

import auth from './authReducer';
import message from './messageReducer';
import conversation from './conversationReducer';
import event from './eventReducer';
import profile from './profileReducer';
import connectionStatus from './connectionStatusReducer';
import idEvent from './currentEventReducer';
import participant from './participantReducer';
import participate from './participateEventReducer';
import userEvents from './userEventsReducer';
import currentConv from './currentConvReducer';
import participation from './statusParticipationReducer';
import interested from './interestedEventReducer';
import location from './locationReducer';

export default combineReducers({
  auth,
  message,
  conversation,
  event,
  profile,
  connectionStatus,
  idEvent,
  participant,
  participate,
  userEvents,
  currentConv,
  participation,
  interested,
  location,
});
