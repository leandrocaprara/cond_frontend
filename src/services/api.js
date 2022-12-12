import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8000'
})

export const createSession = async (email, password) => {
  return api.post('/login/', { email, password })
    .then(response => { return response })
    .catch(error => { return error })
}
