import { 
  SimpleGrid, 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Textarea, 
  Select, 
  Input, 
  Button, 
  Icon,
  Container
} from "@chakra-ui/react"
import { FiSearch } from "react-icons/fi"
import { BsCalculator } from "react-icons/bs"

export default function FormularioSection() {
  return (
    <Container maxW="7xl" py={12}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
        
        <Box bg="sectionBg" p={8} borderRadius="2xl" boxShadow="lg">
          <VStack spacing={6} align="stretch">
            <VStack spacing={4}>
              <Box 
                w={16} 
                h={16} 
                bg="brand.100" 
                borderRadius="full" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
              >
                <Icon as={FiSearch} w={8} h={8} color="brand.700" />
              </Box>
              <Heading size="lg" color="sectionText" textAlign="center">
                ¿Buscas un camión específico?
              </Heading>
              <Text color="sectionText" opacity={0.8} textAlign="center" fontSize="sm">
                Cuéntanos qué necesitas, nosotros lo buscamos por ti en Europa y lo 
                traemos a España al mejor precio.
              </Text>
            </VStack>

            <VStack spacing={6} align="stretch">
            <Box>
                <Text fontSize="sm" fontWeight="medium" color="sectionText" mb={2}>
                  Email
                </Text>
                <Input
                  type="text"
                  placeholder="Email"
                  focusBorderColor="brand.500"
                  borderColor="gray.300"
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="medium" color="sectionText" mb={2}>
                  Tipo de camión / características
                </Text>
                <Textarea
                  placeholder="Describe el tipo de camión grúa que necesitas..."
                  focusBorderColor="brand.500"
                  borderColor="gray.300"
                  rows={4}
                  resize="none"
                />
              </Box>

              <Box>
                <Text fontSize="sm" fontWeight="medium" color="sectionText" mb={2}>
                  Presupuesto estimado
                </Text>
                <Select 
                  placeholder="Selecciona tu rango de presupuesto"
                  focusBorderColor="brand.500"
                  borderColor="gray.300"
                >
                  <option>Hasta 50.000€</option>
                  <option>50.000€ - 100.000€</option>
                  <option>100.000€ - 200.000€</option>
                  <option>Más de 200.000€</option>
                </Select>
              </Box>

              <Button
                bg="buttonBg"
                color="buttonText"
                size="lg"
                leftIcon={<Icon as={FiSearch} />}
                _hover={{ bg: "brand.600" }}
                transition="all 0.2s"
              >
                Solicitar Búsqueda
              </Button>
            </VStack>
          </VStack>
        </Box>

       
        <Box bg="sectionBg" p={8} borderRadius="2xl" boxShadow="lg">
          <VStack spacing={6} align="stretch">
            <VStack spacing={4}>
              <Box 
                w={16} 
                h={16} 
                bg="brand.100" 
                borderRadius="full" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
              >
                <Icon as={BsCalculator} w={8} h={8} color="brand.700" />
              </Box>
              <Heading size="lg" color="sectionText" textAlign="center">
                ¿Qué camión necesitas?
              </Heading>
              <Text color="sectionText" opacity={0.8} textAlign="center" fontSize="sm">
                Introduce altura, peso y radio y te sugerimos el modelo de grúa ideal.
              </Text>
            </VStack>

            <VStack spacing={6} align="stretch">
              <Box>
                <Text fontSize="sm" fontWeight="medium" color="sectionText" mb={2}>
                  Altura (m)
                </Text>
                <Input
                  type="number"
                  placeholder="Ej: 25"
                  focusBorderColor="brand.500"
                  borderColor="gray.300"
                />
              </Box>

              <Box>
                <Text fontSize="sm" fontWeight="medium" color="sectionText" mb={2}>
                  Peso a levantar (kg)
                </Text>
                <Input
                  type="number"
                  placeholder="Ej: 5000"
                  focusBorderColor="brand.500"
                  borderColor="gray.300"
                />
              </Box>

              <Box>
                <Text fontSize="sm" fontWeight="medium" color="sectionText" mb={2}>
                  Radio (m)
                </Text>
                <Input
                  type="number"
                  placeholder="Ej: 15"
                  focusBorderColor="brand.500"
                  borderColor="gray.300"
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="medium" color="sectionText" mb={2}>
                 Ejes
                </Text>
                <Input
                  type="number"
                  placeholder="Ej: 4"
                  focusBorderColor="brand.500"
                  borderColor="gray.300"
                />
              </Box>

              <Button
                bg="buttonBg"
                color="buttonText"
                size="lg"
                leftIcon={<Icon as={BsCalculator} />}
                _hover={{ bg: "brand.600" }}
                transition="all 0.2s"
              >
                Calcular Grúa Ideal
              </Button>
            </VStack>
          </VStack>
        </Box>

      </SimpleGrid>
    </Container>
  )
}