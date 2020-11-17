// ! goes in all actions
import API from '../../API';
import {
  SET_LOGGED_IN,
} from '../actionTypes';

export const logout = () => {
  localStorage.removeItem('token');
  return { type: SET_LOGGED_IN, loggedIn: false };
};

// ! Hook up this function
export const loginUser = ( {email, password} ) => async (dispatch) => {
  console.log ("loginUser()", email, password)
  const { pass, loggedIn } = await API.post('/auth/login', { email, password  });
  console.log("API data ", loggedIn)
  localStorage.setItem('token', pass);
  dispatch({ type: SET_LOGGED_IN, loggedIn });
};

export const registerUser = ({avatar, city, password, email}) => async (dispatch) => {
  console.log('From react form >>>', avatar, email, password)
  const { token, loggedIn } = await API.post('/auth/signup', { email, password, city, avatar });
  localStorage.setItem('token', token);
  console.log(token, loggedIn)

  dispatch({ type: SET_LOGGED_IN, loggedIn });
};