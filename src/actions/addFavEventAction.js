import { createAction } from 'redux-actions';
import axios from '../helpers/axios';
import { axiosHeaders } from '../helpers/common';

export const ADD_FAVORITE_REQUEST = 'ADD_FAVORITE_REQUEST';
export const ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS';
export const ADD_FAVORITE_ERROR = 'ADD_FAVORITE_ERROR';

export const addFavoriteEventRequest = createAction(ADD_FAVORITE_REQUEST);
export const addFavoriteEventSuccess = createAction(ADD_FAVORITE_SUCCESS);
export const addFavoriteEventError = createAction(ADD_FAVORITE_ERROR);

export default idEvent => (dispatch) => {
  dispatch(addFavoriteEventRequest());
  const idUser = process.browser && localStorage.getItem('idUser');
  return axios.get(`favoriteUserEvent?idUser=${idUser}&idEvent=${idEvent}`, axiosHeaders())
    .then(res => dispatch(addFavoriteEventSuccess(res)))
    .catch(err => dispatch(addFavoriteEventError(err)));
};
