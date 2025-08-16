import { SimpleGrid, Container, Heading, Text, VStack, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import ProductoCard from "../ProductoCard/ProductoCard.jsx"
import { useProductos } from "../../customHook/useProductos"
import { Loading, ErrorCarga } from "../UI"

const Destacados = () => {
  const { productos, loading, error } = useProductos()

  const handleComprar = (producto) => {
    console.log(`Ver detalles de: ${producto.marca} ${producto.modelo}`)
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    console.error(error)
    return <ErrorCarga />
  }

  return (
    <Container maxW="container.xl" py="40px">
      <VStack spacing={8} mb={8}>
        <Heading as="h1" size="2xl" textAlign="center" color="section.lightText">
          Camiones Grúa en Stock
        </Heading>
        <Text fontSize="lg" color="brand.300" textAlign="center">
          Disponibles para entrega inmediata
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="24px" mb={8}>
        {productos.slice(0, 3).map((producto) => (
          <ProductoCard
            key={producto._id}
            {...producto}
            onComprar={() => handleComprar(producto)}
          />
        ))}
      </SimpleGrid>

      <VStack spacing={4}>
        <Link to="/stock">
          <Button 
            variant="outline" 
            borderColor="brand.500"
            color="brand.500"
            _hover={{ bg: "brand.500", color: "white" }}
            size="lg"
          >
            🚛 Ver Todos los Camiones
          </Button>
        </Link>
      </VStack>
    </Container>
  )
}

export default Destacados