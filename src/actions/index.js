import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import loginAction from './authAction/loginAction';
import messageAction from './messageAction';
import profileSaveAction from './profileAction/profileSaveAction';

const allActions = {
  loginAction,
  messageAction,
  profileSaveAction,
};

export default dispatch => ({ actions: bindActionCreators(allActions, dispatch) });

export const actionPropTypes = PropTypes.shape({
  loginAction: PropTypes.func.isRequired,
  messageAction: PropTypes.func.isRequired,
  profileSaveAction: PropTypes.func.isRequired,
});
