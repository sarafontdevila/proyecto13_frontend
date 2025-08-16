import { useContext } from "react"
import { ProductoContext } from "../contexts/ProductoContext.js" 
export const useProductos = () => {
  const context = useContext(ProductoContext) 

  if (!context) {
    throw new Error("useProductos debe ser usado dentro de ProductoProvider")
  }

  return context
}