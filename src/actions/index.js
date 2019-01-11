import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import loginAction from './authAction/loginAction';
import registerAction from './authAction/registerAction';
import messageAction from './messageAction';
import getMessagesAction from './chatAction/getMessagesAction';

const allActions = {
  loginAction,
  registerAction,
  messageAction,
  getMessagesAction,
};

export default dispatch => ({ actions: bindActionCreators(allActions, dispatch) });

const ptFuncReq = PropTypes.func.isRequired;

export const actionPropTypes = PropTypes.shape({
  loginAction: ptFuncReq,
  registerAction: ptFuncReq,
  messageAction: ptFuncReq,
  getMessagesAction: ptFuncReq,
});
