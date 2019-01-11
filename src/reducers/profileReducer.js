import { PROFILE_SAVE } from '../actions/profileAction/profileSaveAction';

const defaultState = {
  err: null,
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case PROFILE_SAVE:
      return {
        ...state,
        err: null,
        data: action.payload,
        isFetching: true,
      };
    default:
      return state;
  }
};
