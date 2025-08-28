import { Box, Heading, Text, SimpleGrid, Container, Center, VStack, Flex } from "@chakra-ui/react";
import ProductVendido from "../ProductVendido/ProductVendido.jsx";

export default function VistaCompra({ ventas}) {
  return (
    <Container maxW="7xl" w="full" py={10}>
      <VStack spacing={4} mb={10} textAlign="center">
        <Heading as="h1" size="xl" color="brand.600">
          🎉 ¡Felicidades por tu compra!
        </Heading>
        <Text fontSize="md" color="sectionText" opacity={0.8} maxW="600px">
          Gracias por confiar en <b>Tutigruas</b>.  
          
        </Text>
      </VStack>

      {(!ventas || ventas.length === 0) ? (
        <Center>
          <Text fontSize="2xl" opacity={0.8}>
            No tienes registros todavía.
          </Text>
        </Center>
      ) : ventas.length == 1 ? (
        <Flex justify = "center" mb={16}>
          <ProductVendido venta={ventas[0]} />
        </Flex>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} >
          {ventas.map((venta) => (
            <ProductVendido key={venta._id} venta={venta} />
          ))}
        </SimpleGrid>
      )}
      <VStack spacing={4} mb={10} textAlign="center">
        <Heading as="h1" size="xl" color="brand.600">
        Nuestro equipo se pondrá en contacto contigo para coordinar la entrega lo antes posible 🚚
        </Heading>
      </VStack>
    </Container>
  );
}

