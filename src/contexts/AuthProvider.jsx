import { useState, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setLoading(false)
      return
    }
    ;(async () => {
      try {
        const { data } = await axios.get(
          'https://proyecto13-backend.vercel.app/api/v1/users/me',
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        setUser(data)
      } catch (err) {
        console.error('Error cargando /me', err)
        localStorage.removeItem('token')
        setUser(null)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const login = async (email, password) => {
    const { data } = await axios.post(
      'https://proyecto13-backend.vercel.app/api/v1/usuarios/login',
      {
        email,
        password
      }
    )

    localStorage.setItem('token', data.token)
    setUser(data.user)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
