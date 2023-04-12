import axios from 'axios';

const api = axios.create({
  baseURL: 'http://177.103.121.22:5000/',
});

export default api;
