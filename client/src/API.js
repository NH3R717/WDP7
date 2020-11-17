import axios from 'axios'; // added this dependency
const API = axios.create({
  // ! when using apiary
  // baseURL:
  // process.env.API_URL ||
  // 'http://private-0e1363-comsmanagement.apiary-mock.com',
  baseURL: process.env.API_URL || 'http://localhost:5000/api/',
});

API.interceptors.response.use(
  (response) => (response ? response.data : {}),
  (error) => {
    console.log(error);
  }
);

// for each api request going out
API.interceptors.request.use(async (config) => {
  // pull the token out of local storage
  const token = localStorage.getItem('token');
  // if there is no token do nothing
  if (!token) return config;
  // if there is a token, set a header for any request that contains the token
  return {
    ...config,
    headers: { Authorization: `Bearer ${token}` },
  };
});

export default API;
