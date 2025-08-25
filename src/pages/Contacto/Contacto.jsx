import { Box, Heading, Text, VStack, SimpleGrid, Container } from "@chakra-ui/react";
import ContactInfo from "../../components/ContactInfo/ContactInfo.jsx";
import FormularioContacto from "../../components/FormularioContacto/FormularioContacto.jsx";

const Contacto = () => {
  return (
    <Container maxW="7xl" py={12}>
      <Box bg="section.Bg" minH="100vh" py={12}>
        <VStack spacing={8} maxW="1200px" mx="auto" px={4} align="center">
          
          <VStack spacing={3} textAlign="center" mb={8}>
            <Heading as="h1" size="2xl" color="section.lightText" fontWeight="600">
              Contacta con Nosotros
            </Heading>
            <Text fontSize="lg" color="section.lightText" opacity={0.8} maxW="500px">
              Estamos aquí para ayudarte a encontrar el camión grúa perfecto
            </Text>
          </VStack>


          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 10 }} w="full" >
          
           
            <Box
              p={{ base: 4, md: 8 }}
              bg="section.light"
              boxShadow="md"
              border="1px" 
              borderColor="brand.200" borderRadius="2xl" 
            >
              <Heading as="h2" size="lg" mb={6} color="section.lightText">
                Información de Contacto
              </Heading>
              <ContactInfo />
            </Box>

            <Box
              p={{ base: 4, md: 8 }}
              bg="section.light" 
              boxShadow="md"
              border="1px" 
              borderColor="brand.200" borderRadius="2xl"
            >
              <Heading as="h2" size="lg" mb={6} color="section.lightText">
                Envíanos un Mensaje
              </Heading>
              <FormularioContacto />
            </Box>

          </SimpleGrid>
        </VStack>
      </Box>
    </Container>
  );
};

export default Contacto;
