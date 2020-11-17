import { SET_LOGGED_IN, REQ_REGISTER } from '../actionTypes';

const startState = {
  loggedIn: !!localStorage.getItem('token'),
};

// ! handle incorrect login

export default function authReducer(state = startState, action) {
  const { type, ...payload } = action;
  switch (type) {
    case SET_LOGGED_IN: {
      const { loggedIn } = payload;
      return {
        ...state,
        loggedIn,
      };
    }
    default:
      return state;
  }
}
