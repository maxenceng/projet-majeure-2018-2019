import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import loginAction from './authAction/loginAction';
import messageAction from './messageAction';

const allActions = {
  loginAction,
  messageAction,
};

export default dispatch => ({ actions: bindActionCreators(allActions, dispatch) });

export const actionPropTypes = PropTypes.shape({
  loginAction: PropTypes.func.isRequired,
  messageAction: PropTypes.func.isRequired,
});
