import {
  SET_LOGGED_IN,
} from '../actionTypes';

const startState = {
  loggedIn: !!localStorage.getItem('token'),
};

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
          
    default: return state;
  }
}
