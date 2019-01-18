import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';
import { getErrorMessage, axiosHeaders } from '../../helpers/common';

export const ALL_EVENTS_REQUEST = 'ALL_EVENTS_REQUEST';
export const ALL_EVENTS_SUCCESS = 'ALL_EVENTS_SUCCESS';
export const ALL_EVENTS_ERROR = 'ALL_EVENTS_ERROR';

export const allEventsRequest = createAction(ALL_EVENTS_REQUEST);
export const allEventsSuccess = createAction(ALL_EVENTS_SUCCESS);
export const allEventsError = createAction(ALL_EVENTS_ERROR);

export default ({
  date,
  location,
}) => (dispatch) => {
  dispatch(allEventsRequest());
  return axios.get(
    `allEvents?date=${date}&location=${location}`,
    axiosHeaders(),
  )
    .then(res => dispatch(allEventsSuccess(res)))
    .catch(err => dispatch(allEventsError(getErrorMessage(err))));
};
