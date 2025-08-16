import { SimpleGrid } from "@chakra-ui/react"
import ProductoCard from "../ProductoCard/ProductoCard.jsx"

export const ProductoGrid = ({ productos = [], maxItems = null }) => {
  const displayProducts = maxItems ? productos.slice(0, maxItems) : productos

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
      {displayProducts.map((producto) => (
        <ProductoCard key={producto._id} producto={producto} />
      ))}
    </SimpleGrid>
  )
}