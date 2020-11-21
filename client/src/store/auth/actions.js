// ! goes in all actions
import API from '../../API';
import { SET_LOGGED_IN } from '../actionTypes';

export const logout = () => {
  localStorage.removeItem('token');
  return { type: SET_LOGGED_IN, loggedIn: false };
};

// ! Hook up this function
export const loginUser = ({ email, password }) => async (dispatch) => {
  const { token, loggedIn } = await API.post('/auth/login', { email, password });
  localStorage.setItem('token', token);
  dispatch({ type: SET_LOGGED_IN, loggedIn });
};

export const registerUser = ({ email, username, password }) => async (
  dispatch
) => {
  const { token, loggedIn } = await API.post('/auth/signup', {
    email,
    username,
    password,
  });
  localStorage.setItem('token', token);
  dispatch({ type: SET_LOGGED_IN, loggedIn });
};
