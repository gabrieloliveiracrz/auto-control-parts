import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://tcc-unisal.up.railway.app/',
  baseURL: 'http://201.26.157.147:5000',
})

export default api
