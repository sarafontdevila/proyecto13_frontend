import { Box, Container, Heading, Text, Button, Image, VStack, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom"


export default function HeroSection() {
  const handleScroll = () => {
    const formularioSection = document.getElementById('FormularioSection');
    if (formularioSection) {
      formularioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <Box as="section" position="relative" bg="section.dark" color="section.darkText">
      <Container maxW="7xl" py={{ base: 24, lg: 32 }} position="relative" zIndex={1}>
        <VStack gap={12} textAlign="center" maxW="4xl" mx="auto">
          <Box mb={16}>
            <Image
              src="/camionAtardecer.png"
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
            <Text as="span" color="brand.300">próximo camión grúa</Text>
          </Heading>

          <Text fontSize={{ base: "xl", lg: "2xl" }} color="brand.50" lineHeight="1.6">
            Camiones disponibles, importación bajo demanda
            <br />y servicios personalizados.
          </Text>

          <Flex direction={{ base: "column", sm: "row" }} gap={4}>
          <Link to="/stock">
            <Button
              bg="buttonBg"
              _hover={{ bg: "brand.700" }}
              color="buttonText"
              px={8}
              py={6}
              fontSize="lg"
              borderRadius="md"
            >
              Ver Camiones Disponibles
            </Button>
            </Link>

            <Button
              variant="outline"
              borderColor="section.darkText"
              color="section.darkText"
              _hover={{ bg: "section.darkText", color: "section.dark" }}
              px={8}
              py={6}
              fontSize="lg"
              borderRadius="md"
              onClick={handleScroll}
            >
              📍 Te lo Traemos a España
            </Button>
           
           
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
