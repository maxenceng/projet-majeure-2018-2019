import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginError = createAction(LOGIN_ERROR);

export default (email, password) => (dispatch) => {
  dispatch(loginRequest());
  return axios.post('signIn', { email, password })
    .then(res => dispatch(loginSuccess(res)))
    .catch(err => dispatch(loginError(err)));
};
