import { createAction } from 'redux-actions';

export const CONNECTION_STATUS = 'CONNECTION_STATUS';

const setConnectionStatus = createAction(CONNECTION_STATUS);

export default status => (dispatch) => {
  if (process.browser && !status) {
    localStorage.removeItem('userToken');
    localStorage.removeItem('idUser');
  }
  dispatch(setConnectionStatus(status));
};
