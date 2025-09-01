import { SimpleGrid, Container, Heading, Text, VStack, HStack, Button } from "@chakra-ui/react";
import ProductoCard from "../../components/ProductoCard/ProductoCard.jsx";
import { useProductos } from "../../customHook/useProductos";
import { Loading, ErrorCarga } from "../../components/UI";
import Filtros from "../../components/Filtros/Filtros.jsx";

const Stock = () => {
  const { productos, loading, error, page, setPage, totalPages, total } = useProductos();

  if (loading) {
    return <Loading message="Cargando todos los camiones disponibles..." />;
  }

  if (error) {
    console.error(error);
    return <ErrorCarga message="Error al cargar el inventario de camiones" />;
  }

  return (
    <Container maxW="container.xl" py="40px">
      <VStack spacing={8} mb={8}>
        <Filtros />
      </VStack>

      <VStack spacing={8} mb={8}>
        <Heading as="h1" size="2xl" textAlign="center" color="section.lightText">
          Inventario Completo
        </Heading>
        <Text fontSize="lg" color="SectionText" textAlign="center">
          {total} camiones grúa disponibles
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="24px" mb={8}>
        {productos.map((producto) => (
          <ProductoCard
            key={producto._id}
            {...producto} 
          />
        ))}
      </SimpleGrid>

    <HStack justify="center" spacing={4}>
      <Button onClick={() => setPage(1)} isDisabled={page === 1}>
        ⏮
      </Button>
      <Button onClick={() => setPage(page - 1)} isDisabled={page === 1}>
        Anterior
      </Button>
      <Text>
        Página {page} de {totalPages}
      </Text>

      <Button onClick={() => setPage(page + 1)} isDisabled={page === totalPages}>
        Siguiente
      </Button>
      <Button onClick={() => setPage(totalPages)} isDisabled={page === totalPages}>
        ⏭
      </Button>
    </HStack>
      </Container>
    );
};

export default Stock;
