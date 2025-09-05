import { 
  SimpleGrid, 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Icon,
  Container,
  Image,
  useToast
} from "@chakra-ui/react"
import { FiSearch } from "react-icons/fi"
import camionAtardecer from "../../assets/HeaderCamion.jpg"
import FormularioBase from "../FormularioBase/FormularioBase.jsx" 

export default function FormularioSection() {
  const toast = useToast()

  const fields = [
    {
      name: "nombre",
      label: "Nombre",
      type: "text",
      placeholder: "Nombre",
      validation: { required: "El nombre es obligatorio" },
      fullWidth: true
    },
    {
      name: "apellido",
      label: "Apellido",
      type: "text",
      placeholder: "Apellido",
      validation: { required: "El apellido es obligatorio" },
      fullWidth: true
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "Email",
      validation: { required: "El email es obligatorio" },
      fullWidth: true
    },
    {
      name: "truckType",
      label: "Tipo de camión / características",
      type: "textarea",
      placeholder: "Describe el tipo de camión grúa que necesitas...",
      validation: { required: "Este campo es obligatorio" },
      fullWidth: true
    },
    {
      name: "budget",
      label: "Presupuesto estimado",
      type: "select",
      placeholder: "Selecciona tu rango de presupuesto",
      options: ["Hasta 50.000€", "50.000€ - 100.000€", "100.000€ - 200.000€", "Más de 200.000€"],
      validation: { required: "Debes seleccionar un presupuesto" },
      fullWidth: true
    }
  ]

  const handleBusqueda = async (data, toast) => {
    try {
      console.log("Solicitud de búsqueda:", data)
      toast({
        title: "Búsqueda enviada",
        description: "Estamos buscando el camión ideal para ti, te contactamos en breve.",
        status: "info",
        duration: 4000,
        isClosable: true
      })
    } catch (error) {
      console.error("Error al enviar la solicitud de búsqueda:", error)
      toast({
        title: "Error",
        description: "No se pudo procesar la búsqueda.",
        status: "error",
        duration: 4000,
        isClosable: true
      })
    }
  }

  return (
    <Container id="FormularioSection" maxW="7xl" py={12}>
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
                <Icon as={FiSearch} w={8} h={8} color="blue.600" />
              </Box>
              <Heading size="lg" color="sectionText" textAlign="center">
                ¿Buscas un camión específico?
              </Heading>
              <Text color="sectionText" opacity={0.8} textAlign="center" fontSize="sm">
                Cuéntanos qué necesitas, nosotros lo buscamos por ti en Europa y lo 
                traemos a España al mejor precio.
              </Text>
            </VStack>

            <FormularioBase
              fields={fields}
              submitText="Solicitar Búsqueda"
              onSubmit={handleBusqueda}
              toastHandler={toast}
            />
          </VStack>
        </Box>

        <Box borderRadius="2xl" overflow="hidden" boxShadow="lg">
          <Image 
            src={camionAtardecer} 
            alt="Camión al atardecer" 
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>
      </SimpleGrid>
    </Container>
  )
}
