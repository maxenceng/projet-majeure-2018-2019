import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import loginAction from './authAction/loginAction';
import registerAction from './authAction/registerAction';
import profileSaveAction from './profileAction/profileSaveAction';
import getMessagesAction from './chatAction/getMessagesAction';
import getAllEventsAction from './eventAction/getAllEventsAction';
import currentEventAction from './currentEventAction';
import getProfileAction from './profileAction/getProfileAction';
import connectionStatusAction from './connectionStatusAction';
import getParticipantEvent from './getParticipantEvent';
import participateEventAction from './participateEventAction';
import unParticipateEventAction from './unParticipateEventAction';

const allActions = {
  loginAction,
  registerAction,
  profileSaveAction,
  getMessagesAction,
  getAllEventsAction,
  currentEventAction,
  getProfileAction,
  connectionStatusAction,
  getParticipantEvent,
  participateEventAction,
  unParticipateEventAction,
};

export default dispatch => ({ actions: bindActionCreators(allActions, dispatch) });

const ptFuncReq = PropTypes.func.isRequired;

export const actionPropTypes = PropTypes.shape({
  loginAction: ptFuncReq,
  registerAction: ptFuncReq,
  profileSaveAction: ptFuncReq,
  getMessagesAction: ptFuncReq,
  getAllEventsAction: ptFuncReq,
  currentEventAction: ptFuncReq,
  getProfileAction: ptFuncReq,
  connectionStatusAction: ptFuncReq,
  getParticipantEvent: ptFuncReq,
  participateEventAction: ptFuncReq,
  unParticipateEventAction: ptFuncReq,
});
