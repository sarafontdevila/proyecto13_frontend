import { useState, useEffect} from 'react';
import axios from 'axios';
import { ProductoContext } from './ProductoContext';

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtros, setFiltros] = useState({ tipo: '', marca: '', precio: '' });
  const [total, setTotal] = useState (0)

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const limit = 6 

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
            page,
            limit,
          },
        });
        setProductos(response.data.productos || []);
        setTotalPages(response.data.totalPages || 1)  
        setTotal(response.data.total || 0)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProductos();
  }, [filtros, page]);

  const handleFiltroChange = (name, value) => {
    setPage(1)
    setFiltros(prevFiltros => ({
      ...prevFiltros,
      [name]: value,
    }));
  };

  const handleFiltroReset = () => {
    setPage(1)
    setFiltros({ tipo: '', marca: '', precio: '' });
  };

  const contextValue = {
    productos,
    loading,
    error,
    filtros,
    handleFiltroChange,
    handleFiltroReset,
    page,
    setPage,
    totalPages,
    total,
  };

  return (
    <ProductoContext.Provider value={contextValue}>
      {children}
    </ProductoContext.Provider>
  );
};