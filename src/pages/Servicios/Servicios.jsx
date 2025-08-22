import { SimpleGrid, Container, Box, Heading, Text, VStack, Hstack, Icon } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"
import { FaTruck, FaTools, FaGlobeEurope, FaHeadset } from "react-icons/fa"


export default function ServiciosSection() {
  return (
    <Container maxW="7xl" py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        
        {/* Box 1 */}
        <Box p={6} bg="white" borderRadius="2xl" boxShadow="md">
          <VStack align="start" spacing={4}>
            <Icon as={FaTruck} w={8} h={8} color="brand.500" />
            <Heading size="md">Venta de Camiones Grúa</Heading>
            <Text color="gray.600">
              Amplio catálogo de camiones grúa nuevos y usados de las mejores marcas europeas.
            </Text>
            <VStack align="start" spacing={2}>
              {["Mercedes-Benz", "MAN", "Volvo", "Scania", "Iveco"].map((item) => (
                <HStack key={item} spacing={2}>
                  <CheckCircleIcon color="green.400" />
                  <Text>{item}</Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Box>