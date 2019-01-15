import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';

export const PROFILE_SAVE_SUCCESS = 'PROFILE_SAVE_SUCCESS';
export const PROFILE_SAVE_REQUEST = 'PROFILE_SAVE_SUCCESS';
export const PROFILE_SAVE_ERROR = 'PROFILE_SAVE_SUCCESS';
export const profileSaving = createAction(PROFILE_SAVE_SUCCESS);
export const profileRequest = createAction(PROFILE_SAVE_SUCCESS);
export const profileError = createAction(PROFILE_SAVE_SUCCESS);

export default ({
  PROFILE_AVATAR,
  PROFILE_DESC,
  TAG_TEXT,
  USER_FIRSTNAME,
  USER_NAME,
}) => (dispatch) => {
  dispatch(profileRequest());
  const idUser = localStorage.getItem('idUser');
  const tagsArray = TAG_TEXT.split(' ');
  return axios.post('updateProfile', {
    idUser,
    tagsArray,
    description: PROFILE_DESC,
    linkPicture: PROFILE_AVATAR,
    firstname: USER_FIRSTNAME,
    lastname: USER_NAME,
  })
    .then(res => dispatch(profileSaving(res)))
    .catch(err => dispatch(profileError(err)));
};
