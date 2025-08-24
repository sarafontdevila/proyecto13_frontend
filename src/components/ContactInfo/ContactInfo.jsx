import React from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Icon,
  Heading
} from '@chakra-ui/react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';

export default function ContactInfo() {
  
  return (
    <Box maxW="600px" mx="auto" p={6} bg="sectionBg" borderRadius="lg">
      <Heading 
        as="h2" 
        size="lg" 
        mb={6} 
        color="sectionText"
        fontWeight="600"
      >
        Información de Contacto
      </Heading>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Box>
          <HStack spacing={3} mb={2}>
            <Icon as={FaPhone} color="brand.500" boxSize={5} />
            <Text fontWeight="600" color="sectionText">
              Teléfono
            </Text>
          </HStack>
          <VStack align="start" spacing={1} pl={8}>
            <Text fontWeight="600" color="sectionText">
              +34 900 123 456
            </Text>
            <Text fontSize="sm" color="sectionText" opacity={0.7}>
              Lunes a Viernes 9:00 - 18:00
            </Text>
          </VStack>
        </Box>

        <Box>
          <HStack spacing={3} mb={2}>
            <Icon as={FaEnvelope} color="brand.500" boxSize={5} />
            <Text fontWeight="600" color="sectionText">
              Email
            </Text>
          </HStack>
          <VStack align="start" spacing={1} pl={8}>
            <Text fontWeight="600" color="sectionText">
              info@camionesgrua.es
            </Text>
            <Text fontSize="sm" color="sectionText" opacity={0.7}>
              Respuesta en 24 horas
            </Text>
          </VStack>
        </Box>

        <Box>
          <HStack spacing={3} mb={2}>
            <Icon as={FaMapMarkerAlt} color="brand.500" boxSize={5} />
            <Text fontWeight="600" color="sectionText">
              Ubicación
            </Text>
          </HStack>
          <VStack align="start" spacing={1} pl={8}>
            <Text fontWeight="600" color="sectionText">
              Madrid, España
            </Text>
            <Text fontSize="sm" color="sectionText" opacity={0.7}>
              Calle Principal 123
            </Text>
          </VStack>
        </Box>

        <Box>
          <HStack spacing={3} mb={2}>
            <Icon as={FaClock} color="brand.500" boxSize={5} />
            <Text fontWeight="600" color="sectionText">
              Horario
            </Text>
          </HStack>
          <VStack align="start" spacing={1} pl={8}>
            <Text fontWeight="600" color="sectionText">
              Lun - Vie: 9:00 - 18:00
            </Text>
            <Text fontSize="sm" color="sectionText" opacity={0.7}>
              Sáb: 9:00 - 14:00
            </Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
