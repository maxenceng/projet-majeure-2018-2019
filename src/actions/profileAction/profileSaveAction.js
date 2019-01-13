import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';

export const PROFILE_SAVE = 'PROFILE_SAVE';
export const profileSaving = createAction(PROFILE_SAVE);

export default ({
  description,
  username,
}) => (dispatch) => {
  dispatch(profileSaving());
  return axios.post('userProfile', { username, description })
    .then((res) => {
      console.log(res.data);
    });
};
