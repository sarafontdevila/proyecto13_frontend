import { SimpleGrid, Container, Heading, Text, VStack } from "@chakra-ui/react"
import ProductoCard from "../../components/ProductoCard/ProductoCard.jsx"
import { useProductos } from "../../customHook/useProductos"
import { Loading, ErrorCarga } from "../../components/UI"

const Stock = () => {
  const { productos, loading, error } = useProductos()

  const handleComprar = (producto) => {
    console.log(`Ver detalles de: ${producto.marca} ${producto.modelo}`)
  }

  if (loading) {
    return <Loading message="Cargando todos los camiones disponibles..." />
  }

  if (error) {
    console.error(error)
    return <ErrorCarga message="Error al cargar el inventario de camiones" />
  }

  return (
    <Container maxW="container.xl" py="40px">
      <VStack spacing={8} mb={8}>
        <Heading as="h1" size="2xl" textAlign="center" color="section.lightText">
          Inventario Completo
        </Heading>
        <Text fontSize="lg" color="brand.300" textAlign="center">
          {productos.length} camiones grúa disponibles
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="24px" mb={8}>
        {productos.map((producto) => (
          <ProductoCard
            key={producto._id}
            {...producto}
            onVerDetalles={() => handleComprar(producto)}
          />
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Stock