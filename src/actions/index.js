import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import loginAction from './authAction/loginAction';
import registerAction from './authAction/registerAction';
import messageAction from './messageAction';
import profileSaveAction from './profileAction/profileSaveAction';
import getMessagesAction from './chatAction/getMessagesAction';
import getProfile from './profileAction/getProfile';

const allActions = {
  loginAction,
  registerAction,
  messageAction,
  profileSaveAction,
  getMessagesAction,
  getProfile,
};

export default dispatch => ({ actions: bindActionCreators(allActions, dispatch) });

const ptFuncReq = PropTypes.func.isRequired;

export const actionPropTypes = PropTypes.shape({
  loginAction: ptFuncReq,
  registerAction: ptFuncReq,
  profileSaveAction: ptFuncReq,
  messageAction: ptFuncReq,
  getMessagesAction: ptFuncReq,
  getProfile: ptFuncReq,
});
