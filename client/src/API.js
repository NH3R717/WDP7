import axios from 'axios'; // added this dependency
const API = axios.create({
  // ! when using apiary
  // baseURL:
  // process.env.API_URL ||
  // 'http://private-0e1363-comsmanagement.apiary-mock.com',
  baseURL: process.env.API_URL || 'http://localhost:5000/api/',
});

export default API;

