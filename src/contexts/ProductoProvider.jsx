import { useState, useEffect,useCallback} from 'react';
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

  
    const fetchAllProductos = useCallback(async () => {
      setLoading(true);
      setError(null);
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
  }, [filtros, page]);

  useEffect(() => { fetchAllProductos(); }, [fetchAllProductos]);

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
  const createProducto = async (formData) => {
    await axios.post('http://localhost:3000/api/v1/productos', formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    await fetchAllProductos();
  };
  const updateProducto = async (id, payload, isMultipart = false) => {
    await axios.put(`http://localhost:3000/api/v1/productos/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...(isMultipart ? { "Content-Type": "multipart/form-data" } : {}),
      },
    });
    await fetchAllProductos();
  };
    const deleteProducto = async (id) => {
      await axios.delete(`http://localhost:3000/api/v1/productos/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      await fetchAllProductos();
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
      refetch: fetchAllProductos,
      createProducto,
      updateProducto,
      deleteProducto,
    };

  return (
    <ProductoContext.Provider value={ contextValue }>
      {children}
    </ProductoContext.Provider>
  );
};