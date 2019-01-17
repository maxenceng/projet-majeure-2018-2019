import { GET_INTERESTED_EVENT_SUCCESS } from '../actions/getInterestedEventAction';

const defaultState = {
  err: null,
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_INTERESTED_EVENT_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload.data,
        isFetching: true,
      };
    default:
      return state;
  }
};
