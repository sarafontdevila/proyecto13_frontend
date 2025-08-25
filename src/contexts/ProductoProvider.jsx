/*import { useState, useEffect } from 'react' 
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
}*/
// src/contexts/ProductoProvider.jsx
import { useState, useEffect} from 'react';
import axios from 'axios';
import { ProductoContext } from './ProductoContext';

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtros, setFiltros] = useState({ tipo: '', marca: '', precio: '' });

  useEffect(() => {
    const fetchAllProductos = async () => {
      setLoading(true);
      try {
        let precioMin = '';
        let precioMax = '';
        
        if (filtros.precio) {
          const precioRango = filtros.precio.split('-');
          precioMin = precioRango[0];
          precioMax = precioRango[1];
        }

        const response = await axios.get('http://localhost:3000/api/v1/productos', {
          params: {
            tipo: filtros.tipo,
            marca: filtros.marca,
            precioMin: precioMin,
            precioMax: precioMax,
          },
        });
        setProductos(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProductos();
  }, [filtros]);

  const handleFiltroChange = (name, value) => {
    setFiltros(prevFiltros => ({
      ...prevFiltros,
      [name]: value,
    }));
  };

  const handleFiltroReset = () => {
    setFiltros({ tipo: '', marca: '', precio: '' });
  };

  const contextValue = {
    productos,
    loading,
    error,
    filtros,
    handleFiltroChange,
    handleFiltroReset,
  };

  return (
    <ProductoContext.Provider value={contextValue}>
      {children}
    </ProductoContext.Provider>
  );
};