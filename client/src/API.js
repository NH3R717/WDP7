import axios from 'axios'; // added this dependency
const API = axios.create({
  baseURL:
    process.env.API_URL ||
    'http://private-0e1363-comsmanagement.apiary-mock.com',
});

export default API;
