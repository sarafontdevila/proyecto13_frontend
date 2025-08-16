import { Container, Alert, AlertIcon } from "@chakra-ui/react"

export const ErrorCarga = ({ message = "Error al cargar los productos" }) => (
  <Container maxW="container.xl" py="40px">
    <Alert status="error">
      <AlertIcon />
      {message}
    </Alert>
  </Container>
)