import { Box, Image, Text, Button, VStack, HStack,  Flex ,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,useDisclosure,} from "@chakra-ui/react"
import FormularioVenta from "../FormularioVenta/FormularioVenta.jsx";

const ProductoCard = ({
  _id,
  marca,
  modelo,
  tipo,
  anyoFabricacion,
  kilometraje,
  estado,
  precioVenta,
  imagen,
  onVentaCreada,
  vendido=false,
  children,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
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
    >
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

        {vendido ? (
          <Button
          bg="buttonSecondaryBg"
          color="buttonSecondaryText"
          >
            ¡Comprado!
          </Button>
        ) : (
          <>
            <Button
              bg="buttonSecondaryBg"
              color="buttonSecondaryText"
              size="lg"
              w="100%"
              borderRadius="8px"
              fontWeight="600"
              _hover={{ bg: "buttonSecondaryHover" }}
              _active={{ bg: "buttonSecondaryActive" }}
              onClick={onOpen}
            >
              Comprar
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Comprar {marca} {modelo}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormularioVenta
                    productoId={_id}
                    onExito={onClose}
                    onVentaCreada={(venta) =>
                      onVentaCreada({
                        ...venta,
                        producto: { _id, marca, modelo, tipo, anyoFabricacion, kilometraje, estado, precioVenta, imagen }
                      })
                    }
                  />
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
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
export default ProductoCard;