import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tcc-unisal.up.railway.app/',
});

export default api;
