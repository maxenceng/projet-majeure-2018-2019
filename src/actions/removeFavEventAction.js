import { createAction } from 'redux-actions';
import axios from '../helpers/axios';
import { axiosHeaders } from '../helpers/common';

export const REMOVE_FAVORITE_REQUEST = 'REMOVE_FAVORITE_EVENT_REQUEST';
export const REMOVE_FAVORITE_SUCCESS = 'REMOVE_FAVORITE_EVENT_SUCCESS';
export const REMOVE_FAVORITE_ERROR = 'REMOVE_FAVORITE_EVENT_ERROR';

export const removeFavoriteRequest = createAction(REMOVE_FAVORITE_REQUEST);
export const removeFavoriteSuccess = createAction(REMOVE_FAVORITE_SUCCESS);
export const removeFavoriteError = createAction(REMOVE_FAVORITE_ERROR);

export default idEvent => (dispatch) => {
  dispatch(removeFavoriteRequest());
  const idUser = process.browser && localStorage.getItem('idUser');
  return axios.get(`removeFavorite?idUser=${idUser}&idEvent=${idEvent}`, axiosHeaders())
    .then(res => dispatch(removeFavoriteSuccess(res)))
    .catch(err => dispatch(removeFavoriteError(err)));
};
