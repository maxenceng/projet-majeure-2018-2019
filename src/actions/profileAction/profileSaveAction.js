import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';
import { axiosHeaders } from '../../helpers/common';

export const PROFILE_SAVE_SUCCESS = 'PROFILE_SAVE_SUCCESS';
export const PROFILE_SAVE_REQUEST = 'PROFILE_SAVE_REQUEST';
export const PROFILE_SAVE_ERROR = 'PROFILE_SAVE_ERROR';
export const profileSaving = createAction(PROFILE_SAVE_SUCCESS);
export const profileRequest = createAction(PROFILE_SAVE_REQUEST);
export const profileError = createAction(PROFILE_SAVE_ERROR);

export default ({
  PROFILE_AVATAR,
  PROFILE_DESC,
  tags,
  USER_FIRSTNAME,
  USER_NAME,
}) => (dispatch) => {
  dispatch(profileRequest());
  const idUser = process.browser && localStorage.getItem('idUser');
  const tagsArray = typeof tags === 'string' ? tags.split(' ') : [];
  return axios.post('updateProfile', {
    idUser,
    tagsArray,
    description: PROFILE_DESC,
    linkPicture: PROFILE_AVATAR,
    firstname: USER_FIRSTNAME,
    lastname: USER_NAME,
  }, axiosHeaders())
    .then(() => dispatch(profileSaving({
      data: {
        profile: [{
          PROFILE_AVATAR,
          PROFILE_DESC,
          tags,
          USER_FIRSTNAME,
          USER_NAME,
        }],
      },
    })))
    .catch(err => dispatch(profileError(err)));
};
