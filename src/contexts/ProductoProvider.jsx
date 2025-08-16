import { useState, useEffect } from 'react' 
import { ProductoContext } from './ProductoContext'

export const ProductoProvider = ({ children }) => {

  const [productos, setProductos] =useState ([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect (() => {
    const fetchAllProductos = async () => {
      try {
        const response = await fetch('http://localhost:3000.com/api/v1/productos')
        const data = await response.json()
        setProductos(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    fetchAllProductos()
  }, [])
  return (
    <ProductoContext.Provider value={{ productos, loading, error }}>
      {children}
    </ProductoContext.Provider>
  );
}