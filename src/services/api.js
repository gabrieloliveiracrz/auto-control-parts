import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://tcc-unisal.up.railway.app/',
  baseURL: 'http://177.95.0.160:5000',
});

export default api;
