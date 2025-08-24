import React from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Icon,
} from '@chakra-ui/react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';

export default function ContactInfo() {
  
  const contactItems = [
    {
      icon: FaPhone,
      title: 'Teléfono',
      mainText: '+34 900 123 456',
      subText: 'Lunes a Viernes 9:00 - 18:00',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      mainText: 'info@camionesgrua.es',
      subText: 'Respuesta en 24 horas',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Ubicación',
      mainText: 'Madrid, España',
      subText: 'Calle Principal 123',
    },
    {
      icon: FaClock,
      title: 'Horario',
      mainText: 'Lun - Vie: 9:00 - 18:00',
      subText: 'Sáb: 9:00 - 14:00',
    },
  ];

  return (
    <Box maxW="900px" mx="auto" p={{ base: 4, md: 8 }}>
      <SimpleGrid columns={{ base: 1, sm:2,  md: 2 }} spacing={{ base: 4, md: 8 }}>
        {contactItems.map((item, index) => (
          <Box
            key={index}
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
          >
            <HStack spacing={4} mb={2}>
              <Icon as={item.icon} color="brand.500" boxSize={6} />
              <VStack align="start" spacing={0}>
                <Text fontWeight="600" fontSize="lg" color="gray.600">
                  {item.title}
                </Text>
                <Text fontWeight="bold" fontSize="md" color="section.lightText">
                  {item.mainText}
                </Text>
                <Text fontSize="sm" color="gray.500" mt={-1}>
                  {item.subText}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
 ;
}