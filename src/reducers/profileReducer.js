import { PROFILE_SAVE } from '../actions/profileAction/profileSaveAction';

export default (state = '', action) => {
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
