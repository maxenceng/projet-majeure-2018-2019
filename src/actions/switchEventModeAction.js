import { createAction } from 'redux-actions';

export const SWITCH_EVENT_MODE_REQUEST = 'SWITCH_EVENT_MODE_REQUEST';
export const SWITCH_EVENT_MODE_SUCCESS = 'SWITCH_EVENT_MODE_SUCCESS';
export const SWITCH_EVENT_MODE_ERROR = 'SWITCH_EVENT_MODE_ERROR';

export const switchEventModeRequest = createAction(SWITCH_EVENT_MODE_REQUEST);
export const switchEventModeSuccess = createAction(SWITCH_EVENT_MODE_SUCCESS);
export const switchEventModeError = createAction(SWITCH_EVENT_MODE_ERROR);

export default () => (dispatch) => {
  dispatch(switchEventModeRequest());
  const mode = process.browser && localStorage.getItem('eventMode');
  if (mode !== null) {
    dispatch(switchEventModeSuccess(mode));
    return mode;
  }
  dispatch(switchEventModeError());
  return '';
};
