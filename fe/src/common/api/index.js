import axios from 'axios'

const api = axios.create({
  baseURL: 'http://52.79.125.202:8080',
  headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
})

export default api
