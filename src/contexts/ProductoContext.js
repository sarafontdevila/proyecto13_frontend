import { createContext, useContext } from "react"

export const ProductoContext = createContext()

export const useProductos = () => {
  const context = useContext(ProductoContext)
  if (!context) {
    throw new Error("useProductos must be used within a ProductoProvider")
  }
  return context
}