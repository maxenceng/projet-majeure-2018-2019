import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';
import { getErrorMessage } from '../../helpers/common';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginError = createAction(LOGIN_ERROR);

export default ({ email, password }) => (dispatch) => {
  dispatch(loginRequest());
  return axios.post('signIn', { email, password })
    .then((res) => {
      dispatch(loginSuccess(res));
      if (process.browser) {
        localStorage.setItem('userToken', res.data.token);
        localStorage.setItem('idUser', res.data.user[0].ID_USER);
      }
    })
    .catch(err => dispatch(loginError(getErrorMessage(err))));
};
