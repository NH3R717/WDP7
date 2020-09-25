import axios from 'axios';
const API = axios.create({
  baseURL:
    process.env.API_URL ||
    'http://private-0e1363-comsmanagement.apiary-mock.com',
});

export default API;
