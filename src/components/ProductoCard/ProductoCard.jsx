import { Box, Image, Text, Button, VStack, HStack, Badge, Flex } from "@chakra-ui/react"

const ProductoCard = ({
  marca,
  modelo,
  tipo,
  anyoFabricacion,
  kilometraje,
  estado,
  precioVenta,
  imagen,
  onComprar,
}) => {

  const enStock = estado === "Disponible" || estado === "En Stock"

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
      maxW="400px"
      mx="auto"
    >
      <Box position="relative">
        <Image
          src={imagen || `/placeholder.svg?height=240&width=400&query=${marca} ${modelo} truck`}
          alt={`${marca} ${modelo}`}
          w="100%"
          h="240px"
          objectFit="cover"
        />

        {enStock && (
          <Badge
            position="absolute"
            top="12px"
            left="12px"
            bg="brand.500"
            color="white"
            px="8px"
            py="4px"
            borderRadius="6px"
            fontSize="sm"
            fontWeight="600"
          >
            En Stock
          </Badge>
        )}
      </Box>

      <VStack align="stretch" p="20px" spacing="16px">
        <VStack align="stretch" spacing="4px">
          <Text fontSize="xl" fontWeight="700" color="sectionText" lineHeight="1.2">
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

        <Button
          bg="buttonSecondaryBg"
          color="buttonSecondaryText"
          size="lg"
          w="100%"
          borderRadius="8px"
          fontWeight="600"
          _hover={{
            bg: "buttonSecondaryHover",
          }}
          _active={{
            bg: "buttonSecondaryActive",
          }}
          onClick={onComprar}
        >
          Comprar
        </Button>
      </VStack>
    </Box>
  )
}

export default ProductoCard
