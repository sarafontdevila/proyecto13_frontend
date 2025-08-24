import { SimpleGrid, Container, Box, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"
import { FaTruck, FaTools, FaGlobeEurope, FaHeadset } from "react-icons/fa"


export default function ServiciosSection() {
  return (
    <Container maxW="7xl" py={12} bg="sectionBg">
      <VStack spacing={8} mb={8}>
        <Heading as="h1" size="2xl" textAlign="center" color="sectionText">
          Nuestros Servicios
        </Heading>
        <Text fontSize="lg" color="sectionText" opacity={0.8} textAlign="center">
           Ofrecemos una gama completa de servicios para satisfacer las necesidades de nuestros clientes
        </Text>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        
        <Box p={6} bg="sectionBg" border="1px" borderColor="brand.200" borderRadius="2xl" boxShadow="md">
          <VStack align="start" spacing={4}>
            <Icon as={FaTruck} w={8} h={8} color="brand.500" />
            <Heading size="md" color="sectionText">Venta de Camiones Grúa</Heading>
            <Text color="sectionText" opacity={0.7}>
              Amplio catálogo de camiones grúa nuevos y usados de las mejores marcas europeas.
            </Text>
            <VStack align="start" spacing={2}>
              {["Mercedes-Benz", "MAN", "Volvo", "Scania", "Iveco"].map((item) => (
                <HStack key={item} spacing={2}>
                  <CheckCircleIcon color="brand.400" />
                  <Text color="sectionText">{item}</Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Box>

        <Box p={6} bg="sectionBg" border="1px" borderColor="brand.200" borderRadius="2xl" boxShadow="md">
          <VStack align="start" spacing={4}>
            <Icon as={FaGlobeEurope} w={8} h={8} color="brand.500" />
            <Heading size="md" color="sectionText">Importación desde Europa</Heading>
            <Text color="sectionText" opacity={0.7}>
              Importamos el camión grúa que necesitas desde cualquier país europeo.
            </Text>
            <VStack align="start" spacing={2}>
              {["Gestión completa", "Documentación", "Transporte", "Homologación"].map((item) => (
                <HStack key={item} spacing={2}>
                  <CheckCircleIcon color="brand.600" />
                  <Text color="sectionText">{item}</Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Box>

        <Box p={6} bg="sectionBg" border="1px" borderColor="brand.200" borderRadius="2xl" boxShadow="md">
          <VStack align="start" spacing={4}>
            <Icon as={FaTools} w={8} h={8} color="brand.500" />
            <Heading size="md" color="sectionText">Servicios Técnicos</Heading>
            <Text color="sectionText" opacity={0.7}>
              Mantenimiento, reparación y modificaciones de camión grúa.
            </Text>
            <VStack align="start" spacing={2}>
              {["Mantenimiento", "Reparaciones", "Modificaciones", "ITV"].map((item) => (
                <HStack key={item} spacing={2}>
                  <CheckCircleIcon color="brand.400" />
                  <Text color="sectionText">{item}</Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Box>

        <Box p={6} bg="sectionBg" border="1px" borderColor="brand.200" borderRadius="2xl" boxShadow="md">
          <VStack align="start" spacing={4}>
            <Icon as={FaHeadset} w={8} h={8} color="brand.500" />
            <Heading size="md" color="sectionText">Asesoramiento Personalizado</Heading>
            <Text color="sectionText" opacity={0.7}>
              Te ayudamos a encontrar el camión grúa perfecto para tus servicios.
            </Text>
            <VStack align="start" spacing={2}>
              {["Consultoría", "Financiación", "Seguros", "Garantia"].map((item) => (
                <HStack key={item} spacing={2}>
                  <CheckCircleIcon color="brand.400" />
                  <Text color="sectionText">{item}</Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Box>
        </SimpleGrid>
    </Container>
  )
}