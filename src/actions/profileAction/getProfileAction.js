import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';

export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';

export const getProfileRequest = createAction(GET_PROFILE_REQUEST);
export const getProfileSuccess = createAction(GET_PROFILE_SUCCESS);
export const getProfileError = createAction(GET_PROFILE_ERROR);

export default () => (dispatch) => {
  dispatch(getProfileRequest());
  const idUser = process.browser && localStorage.getItem('idUser');
  return axios.get(`userProfile?idUser=${idUser}`)
    .then(res => dispatch(getProfileSuccess(res)))
    .catch(err => dispatch(getProfileError(err)));
};
