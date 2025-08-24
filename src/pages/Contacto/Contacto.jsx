import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import ContactInfo from "../../components/ContactInfo/ContactInfo.jsx"

const Contacto = () => {
  return (
    <Box bg="sectionBg" minH="100vh" py={8}>
      <VStack spacing={6} maxW="800px" mx="auto" px={4}>
        <VStack spacing={3} textAlign="center">
          <Heading 
            as="h1" 
            size="2xl" 
            color="sectionText"
            fontWeight="600"
          >
            Contacta con Nosotros
          </Heading>
          <Text 
            fontSize="lg" 
            color="sectionText" 
            opacity={0.8}
            maxW="500px"
          >
            Estamos aquí para ayudarte a encontrar el camión grúa perfecto
          </Text>
        </VStack>
        
        <ContactInfo />
      </VStack>
    </Box>
  )
}

export default Contacto
