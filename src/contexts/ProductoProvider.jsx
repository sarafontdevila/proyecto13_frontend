import { useState, useEffect } from 'react' 
import { ProductoContext } from './ProductoContext'

export const ProductoProvider = ({ children }) => {

  const [productos, setProductos] =useState ([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect (() => {
    const fetchAllProductos = async () => {
      try {
        setLoading(true)

        const response = await fetch('http://localhost:3000/api/v1/productos')
        const data = await response.json()
        setProductos(data)
        setLoading(false)
      } catch (error) {
        setError(error)
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