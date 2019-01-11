import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/authAction/loginAction';

const defaultState = {
  err: null,
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload,
        isFetching: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        err: action.payload,
        data: {},
        isFetching: false,
      };
    default:
      return state;
  }
};
