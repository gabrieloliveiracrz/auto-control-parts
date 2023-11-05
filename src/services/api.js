import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://tcc-unisal.up.railway.app/',
  baseURL: 'http://191.17.51.57:5000',
})

export default api
