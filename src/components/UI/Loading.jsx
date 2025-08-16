import { Container, VStack, Spinner, Text } from "@chakra-ui/react"

export const Loading = ({ message = "Cargando productos..." }) => (
  <Container maxW="container.xl" py="40px">
    <VStack spacing={4}>
      <Spinner size="xl" color="brand.500" />
      <Text color="section.lightText">{message}</Text>
    </VStack>
  </Container>
)

