import { createAction } from 'redux-actions';
import axios from '../helpers/axios';

export const GET_FAVORITE_STATUS_REQUEST = 'GET_FAVORITE_STATUS_REQUEST';
export const GET_FAVORITE_STATUS_SUCCESS = 'GET_FAVORITE_STATUS_SUCCESS';
export const GET_FAVORITE_STATUS_ERROR = 'GET_FAVORITE_STATUS_ERROR';

export const getFavoriteStatusRequest = createAction(GET_FAVORITE_STATUS_REQUEST);
export const getFavoriteStatusSuccess = createAction(GET_FAVORITE_STATUS_SUCCESS);
export const getFavoriteStatustError = createAction(GET_FAVORITE_STATUS_ERROR);

export default idEvent => (dispatch) => {
  dispatch(getFavoriteStatusRequest());
  const idUser = process.browser && localStorage.getItem('idUser');
  return axios.get(`userFavoriteEvent?idUser=${idUser}&idEvent=${idEvent}`)
    .then(res => dispatch(getFavoriteStatusSuccess(res)))
    .catch(err => dispatch(getFavoriteStatustError(err)));
};
