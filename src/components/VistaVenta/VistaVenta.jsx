import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Text, Center, Button, Flex, Container, useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody, } from "@chakra-ui/react";
import { AddIcon} from "@chakra-ui/icons";
import CrearProducto from "../CrearProducto/CrearProducto.jsx";


export default function VistaVenta({ ventas =[] }) {
  const crear = useDisclosure()

  return (
    <Container maxW="7xl" w="full">
      <Flex justify="space-between" align="center" mb={8} mt={4}>
        <Heading as="h1" size="xl" color="section.lightText" fontWeight="bold">
          Gestión de Productos y Ventas
        </Heading>
          <Button
            leftIcon={<AddIcon />}
            bg="brand.500"
            color="white"
            _hover={{ bg: "brand.600" }}
            _active={{ bg: "brand.700" }}
            shadow="md"
            px={6}
            py={3}
            borderRadius="md"
            onClick={crear.onOpen}
          >
            Crear Producto
          </Button>
      </Flex>

      {ventas.length === 0 ? (
        <Center flexDirection="column" textAlign="center">
          <Text fontSize="2xl" color="section.lightText" opacity={0.8} maxW="500px">
            No hay registros todavía.
          </Text>
        </Center>
      ) : (
        <Box
          border="1px"
          borderColor="brand.200"
          borderRadius="md"
          overflow="hidden"
          boxShadow="sm"
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th># Venta</Th>
                <Th>Producto</Th>
                <Th>Cliente</Th>
                <Th>Método de pago</Th>
                <Th>Fecha entrega</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ventas.map((venta, index) => (
                <Tr
                  key={venta._id}
                  bg={index % 2 === 0 ? "brand.50" : "brand.100"}
                >
                  <Td>{venta._id}</Td>
                  <Td>{venta.producto?.modelo}</Td>
                  <Td>{venta.cliente?.nombre}</Td>
                  <Td>{venta.metodoPago}</Td>
                  <Td>
                    {venta.fechaEntrega
                      ? new Date(venta.fechaEntrega).toLocaleDateString()
                      : "No definida"}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
      
      <CrearProducto isOpen={crear.isOpen} onClose={crear.onClose} />
    </Container>
  );
}