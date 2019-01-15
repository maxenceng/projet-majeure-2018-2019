import { SET_CURRENT_CONV } from '../actions/currentConvAction';

export default (state = '', action) => {
  switch (action.type) {
    case SET_CURRENT_CONV:
      return action.payload;
    default:
      return state;
  }
};
