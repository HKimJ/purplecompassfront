import axios from 'axios'

const client = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8888/'

})

export default client;

