import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tcc-teste-production.up.railway.app',
});

export default api;
