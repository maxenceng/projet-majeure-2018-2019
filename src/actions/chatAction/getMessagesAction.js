import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';
import { getErrorMessage, axiosHeaders } from '../../helpers/common';

export const MESSAGES_REQUEST = 'MESSAGES_REQUEST';
export const MESSAGES_SUCCESS = 'MESSAGES_SUCCESS';
export const MESSAGES_ERROR = 'MESSAGES_ERROR';

export const messagesRequest = createAction(MESSAGES_REQUEST);
export const messagesSuccess = createAction(MESSAGES_SUCCESS);
export const messagesError = createAction(MESSAGES_ERROR);

export default () => (dispatch) => {
  dispatch(messagesRequest());
  const idUser = process.browser && localStorage.getItem('idUser');
  const idSecondUser = '324486b1-ed95-43ab-9117-b7b7b9641dc8';
  return axios.get(`allMessages?idUser=${idUser}&idSecondUser=${idSecondUser}`, axiosHeaders())
    .then(res => dispatch(messagesSuccess(res)))
    .catch(err => dispatch(messagesError(getErrorMessage(err))));
};
