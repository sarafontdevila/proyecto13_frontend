import { SimpleGrid, Container, Heading, Text, Spinner, Alert, VStack, Button } from "@chakra-ui/react"
import ProductoCard from "../ProductoCard/ProductoCard.jsx"
import { useProductos } from "../../customHook/useProductos"

const Destacados = () => {
  const { productos, loading, error } = useProductos()

  const handleVerDetalles = (producto) => {
    console.log(`Ver detalles de: ${producto}`)
  }

  const handleVerTodos = () => {
    console.log("Ver todos los camiones")
  }

  if (loading) {
    return (
      <Container maxW="container.xl" py="40px">
        <VStack spacing={4}>
          <Spinner size="xl" color="blue.500" />
          <Text>Cargando productos...</Text>
        </VStack>
      </Container>
    )
  }

  if (error) {
    console.error(error)
    return (
      <Container maxW="container.xl" py="40px">
        <Alert status="error">
          Error al cargar los productos
        </Alert>
      </Container>
    )
  }

  return (
    <Container maxW="container.xl" py="40px">
      <VStack spacing={8} mb={8}>
        <Heading as="h1" size="2xl" textAlign="center" color="gray.800">
          Camiones Grúa en Stock
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center">
          Disponibles para entrega inmediata
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="24px" mb={8}>
        {productos.slice(0, 3).map((producto) => (
          <ProductoCard
            key={producto._id}
            {...producto}
            onVerDetalles={() => handleVerDetalles(`${producto.marca} ${producto.modelo}`)}
          />
        ))}
      </SimpleGrid>

      <VStack spacing={4}>
        <Button variant="outline" colorScheme="blue" size="lg" onClick={handleVerTodos}>
          🚛 Ver Todos los Camiones
        </Button>
      </VStack>
    </Container>
  )
}

export default Destacados