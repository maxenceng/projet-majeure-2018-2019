import { createAction } from 'redux-actions';

export const PROFILE_SAVE = 'PROFILE_SAVE';
export const profileSaving = createAction(PROFILE_SAVE);

export default profileSaving;
