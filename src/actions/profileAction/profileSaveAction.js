import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';
import { getErrorMessage } from '../../helpers/common';

export const PROFILE_SAVE_REQUEST = 'PROFILE_SAVE_REQUEST';
export const PROFILE_SAVE_SUCCESS = 'PROFILE_SAVE_SUCCESS';
export const PROFILE_SAVE_ERROR = 'PROFILE_SAVE_ERROR';

export const profileSavingRequest = createAction(PROFILE_SAVE_REQUEST);
export const profileSavingSuccess = createAction(PROFILE_SAVE_SUCCESS);
export const profileSavingError = createAction(PROFILE_SAVE_ERROR);

export default ({ email, password }) => (dispatch) => {
  dispatch(profileSavingRequest());
  return axios.post('updateProfile', { email, password })
    .then((res) => {
      dispatch(profileSavingSuccess(res));
    })
    .catch(err => dispatch(profileSavingError(getErrorMessage(err))));
};
