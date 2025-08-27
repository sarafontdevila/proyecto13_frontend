import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Spinner, Text, Center, Button, Flex, Container } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons"
export default function MiEspacio () {
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(true);

  const userRole = localStorage.getItem("userRole"); 
  const isAdmin = userRole === "admin";

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/ventas", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setVentas(res.data);
      } catch (error) {
        console.error("Error cargando ventas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVentas();
  }, []);

  if (loading) return <Spinner size="xl" />;

  return (
    <Box 
      p={6} minH="100vh" bg="section.light" display="flex" 
      flexDirection="column" alignItems="center" justifyContent="center"
      >
        <Container maxW="7xl" w="full">
        {isAdmin && (
            <Flex justify="space-between" align="center" mb={8} mt={4}>
                <Heading as="h1" size="xl" color="section.lightText" fontWeight="bold">
                    Paleta de Ventas
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
                >
                    Crear Producto
                </Button>
            </Flex>
        )}

      {ventas.length === 0 ? (
        <Center flexDirection="column" textAlign="center" >
        <Text fontSize="2xl" color="section.lightText" opacity={0.8} maxW="500px">
          No tienes registros todavía.
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
              <Tr key={venta._id}
                bg={index % 2 === 0 ? "brand.50" : "brand.100"}>
                <Td>{venta.venta}</Td>
                <Td>{venta.producto?.modelo}</Td>
                <Td>{venta.cliente?.nombre}</Td>
                <Td>{venta.metodoPago}</Td>
                <Td>{venta.fechaEntrega ? new Date(venta.fechaEntrega).toLocaleDateString() : "No definida"}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        </Box>
      )}
      </Container>
    </Box>
  );
};


