import { Box, Container, Heading, Text, Button, Image, VStack, Flex } from "@chakra-ui/react"

export default function HeroSection() {
  return (
    <Box position="relative" bg="section.dark
    " color="section.darkText">
      <Box 
        position="absolute" 
        inset={0} 
        bg="blackAlpha.100" 
      />
      <Container maxW="7xl" py={{ base: 24, lg: 32 }} position="relative" zIndex={1}>
        <VStack gap={12} textAlign="center" maxW="4xl" mx="auto">
          <Box mb={16}>
            <Image
              src="./src/assets/camionAtardecer.png"
              alt="Camión grúa moderno trabajando"
              w="full"
              maxW="100xl"
              h={{ base: 56, md: 72, lg: 96 }}
              objectFit="cover"
              borderRadius="lg"
              boxShadow="2xl"
              mx="auto"
            />
          </Box>
          <Heading fontSize={{ base: "4xl", lg: "6xl" }} fontWeight="bold" lineHeight="1.2" mb={8}>
            Encuentra tu
            <br />
            <Text as="span" color="brand.400">próximo camión grúa</Text>
          </Heading>
          <Text fontSize={{ base: "xl", lg: "2xl" }} color="gray.300" lineHeight="1.6">
            Camiones disponibles, importación bajo demanda
            <br />y servicios personalizados.
          </Text>
          <Flex direction={{ base: "column", sm: "row" }} gap={4}>
            <Button
              bg="brand.500"
              _hover={{ bg: "brand.600" }}
              color="white"
              px={8}
              py={6}
              fontSize="lg"
              borderRadius="md"
            >
              Ver Camiones Disponibles
            </Button>
            <Button
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "white", color: "black" }}
              px={8}
              py={6}
              fontSize="lg"
              borderRadius="md"
            >
              📍 Te lo Traemos a España
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
}
