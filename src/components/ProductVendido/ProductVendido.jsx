/*import { Box, Image, Text, VStack, HStack, Flex } from "@chakra-ui/react";
import ProductoCard from "../ProductoCard/ProductoCard.jsx";*/

/*export default function ProductoVendido({ venta }) {
  const { producto, metodoPago, fechaEntrega, cliente } = venta;

  const formatearPrecio = (precio) => new Intl.NumberFormat("es-ES").format(precio);
  const formatearKilometraje = (km) => new Intl.NumberFormat("es-ES").format(km);

  return (
    <Box bg="green.50" borderRadius="12px" border="1px" borderColor="green.300" w="350px" mx="auto" my={4} p={4}>
      <Image src={producto?.imagen} alt={`${producto?.marca} ${producto?.modelo}`} w="100%" h="240px" objectFit="cover" borderRadius="md" />
      <VStack align="stretch" spacing={2} mt={2}>
        <Text fontSize="xl" fontWeight="700">{producto?.marca} {producto?.modelo}</Text>
        <Text fontSize="md" opacity={0.7}>{producto?.tipo}</Text>
        <HStack justify="space-between">
          <Text fontSize="sm" opacity={0.6}>Kilometraje: {formatearKilometraje(producto?.kilometraje)} km</Text>
          <Text fontSize="sm" opacity={0.6}>Estado: {producto?.estado}</Text>
        </HStack>
        <Flex justify="space-between" align="center">
          <Text fontSize="2xl" fontWeight="700">€ {formatearPrecio(producto?.precioVenta)}</Text>
          <Text fontSize="md" opacity={0.6}>{producto?.anyoFabricacion}</Text>
        </Flex>
        <Text fontWeight="600">Cliente: {cliente?.nombre}</Text>
        <Text fontWeight="600">Método de pago: {metodoPago}</Text>
        <Text fontWeight="600">Fecha de entrega: {fechaEntrega ? new Date(fechaEntrega).toLocaleDateString() : "No definida"}</Text>
      </VStack>
    </Box>
  );
}*/
/*return (
  <ProductoCard {...producto} vendido>
    <VStack align="start" spacing={1} mt={3}>
      <Text fontWeight="600">Cliente: {cliente?.nombre}</Text>
      <Text fontWeight="600">Método de pago: {metodoPago}</Text>
      <Text fontWeight="600">
        Fecha de entrega: {fechaEntrega ? new Date(fechaEntrega).toLocaleDateString() : "No definida"}
      </Text>
    </VStack>
  </ProductoCard>
);
}*/
// src/components/ProductVendido/ProductVendido.jsx
import { VStack, Text } from "@chakra-ui/react";
import ProductoCard from "../ProductoCard/ProductoCard.jsx";

export default function ProductVendido({ venta }) {
  if (!venta) return null;

  const { producto, metodoPago, fechaEntrega, cliente } = venta;

  return (
    <ProductoCard {...producto} vendido>
      <VStack align="start" spacing={1} mt={3}>
        <Text fontWeight="600">Cliente: {cliente?.nombre ?? "—"}</Text>
        <Text fontWeight="600">Método de pago: {metodoPago ?? "—"}</Text>
        <Text fontWeight="600">
          Fecha de entrega:{" "}
          {fechaEntrega ? new Date(fechaEntrega).toLocaleDateString() : "No definida"}
        </Text>
      </VStack>
    </ProductoCard>
  );
}



