import { Box, Image, Text, Button, VStack, HStack,  Flex } from "@chakra-ui/react"
import BotonComprar from "../BotonComprar/BotonComprar.jsx"
import BotonBorrar from "../BotonBorrar/BotonBorrar.jsx"
import BotonEditar from "../BotonEditar/BotonEditar.jsx"

import { useAuth } from "../../customHook/useAuth.js"

export default function ProductoCard ({
  _id,
  marca,
  modelo,
  tipo,
  anyoFabricacion,
  kilometraje,
  estado,
  precioVenta,
  fechaAdquisicion,
  vehiculo,
  imagen,
  vendido=false,
  children,
}) {
  const { user } = useAuth()
  const isAdmin = user?.rol === "admin"
  console.log("Usuario:", user) 
  console.log("Es admin:", isAdmin) 

  const producto = {
    _id,
    vehiculo,
    marca,
    modelo,
    tipo,
    anyoFabricacion,
    kilometraje,
    estado,
    precioVenta,
    fechaAdquisicion,
    imagen
  };

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat("es-ES").format(precio)
  }

  const formatearKilometraje = (km) => {
    return new Intl.NumberFormat("es-ES").format(km)
  }

  return (
    <Box
      bg="sectionBg"
      borderRadius="12px"
      border="1px"
      borderColor="brand.200"
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
      _dark={{
        boxShadow: "0 4px 12px rgba(255, 255, 255, 0.05)"
      }}
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 8px 25px rgba(245, 101, 0, 0.15)",
        borderColor: "brand.300"
      }}
      w="350px"
      mx="auto"
      h= "480px"
      display= "flex"
      flexDirection= "column"
      position= "relative"
    >
        {isAdmin &&(
        <BotonBorrar
          productoId={_id}
          marca={marca}
          modelo={modelo}
          anyoFabricacion={anyoFabricacion}
        />
        )}

      <Box position="relative">
        <Image
          src={imagen || `/placeholder.svg?height=240&width=400&query=${marca} ${modelo} truck`}
          alt={`${marca} ${modelo}`}
          w="100%"
          h="240px"
          objectFit="cover"
        />

      </Box>
      <VStack align="stretch" p="20px" spacing="16px">
        <VStack align="stretch" spacing="4px">
          <Text fontSize="xl" fontWeight="700" color="sectionText" lineHeight="1.2"
          >
            {marca} {modelo}
          </Text>
          <Text fontSize="md" color="sectionText" opacity={0.7} fontWeight="500">
            {tipo}
          </Text>
        </VStack>

        <VStack align="stretch" spacing="8px">
          <HStack justify="space-between">
            <Text fontSize="sm" color="sectionText" opacity={0.6}>
              Kilometraje: {formatearKilometraje(kilometraje)} km
            </Text>
            <Text fontSize="sm" color="sectionText" opacity={0.6}>
              Estado: {estado}
            </Text>
          </HStack>
      </VStack>

        <Flex justify="space-between" align="center">
          <Text fontSize="2xl" fontWeight="700" color="brand.500">
            € {formatearPrecio(precioVenta)}
          </Text>

          <HStack spacing="4px" color="sectionText" opacity={0.6}>
            <Text fontSize="md" fontWeight="500">
              {anyoFabricacion}
            </Text>
          </HStack>
        </Flex>
        {isAdmin ? (
          <BotonEditar producto={ producto } />
        ) : (
          <BotonComprar productoId={_id} vendido={vendido} />
        )}

        {children ? (
          <Box pt={3} borderTop="1px solid" borderColor="brand.100">
            {children}
          </Box>
        ) : null}
      </VStack>
    </Box>
  );
};
