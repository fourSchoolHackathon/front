import axios from 'axios'

const token = () => localStorage.getItem('access_token')

const api = axios.create({
  baseURL: 'http://52.79.125.202:8080',
  headers: localStorage.getItem('access_token') && {
    Authorization: `Bearer ${token()}`
  }
})

export default api
