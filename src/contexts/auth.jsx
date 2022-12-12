import React, { createContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { api, createSession } from '../services/api'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [token, setToken] = useState(null)
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    const response = await createSession(email, password)

    if (response.response?.status === 401) {
      setError('Problemas no login, verifique o usuário e/ou a senha.')
    } else {
      const token = response.data.access

      localStorage.setItem('CondSysUserToken', token)

      api.defaults.headers.Authorization = `Bearer ${token}`

      setToken(token)
      navigate('/dashboard')
    }
  }

  const logout = () => {
    localStorage.removeItem('CondSysUserToken')
    api.defaults.headers.Authorization = null
    setToken(null)
    navigate('/login')
  }

  return (
        <AuthContext.Provider value={{ authenticated: !!token, token, login, logout, error }}>
            {children}
        </AuthContext.Provider>
  )
}
