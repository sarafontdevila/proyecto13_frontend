import { Box, Flex, Text, Link, Stack, Icon } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <Box bg="gray.900" color="gray.200" py={10} px={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        maxW="1200px"
        mx="auto"
        gap={10}
      >
        <Stack spacing={3} maxW="300px">
          <Text fontSize="lg" fontWeight="bold">
            Camiones Grúa España
          </Text>
          <Text fontSize="sm">
            Importación, venta y servicios especializados.
          </Text>
        </Stack>

        <Stack spacing={2}>
          <Text fontSize="lg" fontWeight="bold">
            Servicios
          </Text>
          <Link fontSize="sm">Venta de camiones grúa</Link>
          <Link fontSize="sm">Importación desde Europa</Link>
          <Link fontSize="sm">Servicios personalizados</Link>
        </Stack>

        <Stack spacing={2}>
          <Text fontSize="lg" fontWeight="bold">
            Contacto
          </Text>
          <Flex align="center" gap={2}>
            <PhoneIcon /> <Text fontSize="sm">+34 900 999 888</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <EmailIcon /> <Text fontSize="sm">info@tutigruas.es</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Icon as={MdLocationOn} /> <Text fontSize="sm">Barcelona, España</Text>
          </Flex>
        </Stack>
      </Flex>

      <Box borderTop="1px" borderColor="gray.700" mt={10} pt={4} textAlign="center">
        <Text fontSize="sm" color="gray.500">
          © 2025 Tutigruas por Sara Fontdevila. Todos los derechos reservados.
        </Text>
      </Box>
    </Box>
  );
}
