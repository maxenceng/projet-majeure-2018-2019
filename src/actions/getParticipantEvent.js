import { createAction } from 'redux-actions';
import axios from '../helpers/axios';

export const GET_PARTICIPANT_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PARTICIPANT_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PARTICIPANT_ERROR = 'GET_PROFILE_ERROR';

export const getParticipantRequest = createAction(GET_PARTICIPANT_REQUEST);
export const getParticipantSuccess = createAction(GET_PARTICIPANT_SUCCESS);
export const getParticipantError = createAction(GET_PARTICIPANT_ERROR);

export default ({ idEvent }) => (dispatch) => {
  dispatch(getParticipantRequest());
  // const idUser = localStorage.getItem('idUser');
  return axios.get(`event?idEvent=${idEvent}`)
    .then(res => dispatch(getParticipantSuccess(res)))
    .catch(err => dispatch(getParticipantError(err)));
};
