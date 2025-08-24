import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function FormularioContacto() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const toast = useToast();

  const onSubmit = async (data) => {
    try {

      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Formulario enviado:', data);
      
      toast({
        title: 'Mensaje enviado.',
        description: 'Hemos recibido tu mensaje correctamente.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      reset();

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      toast({
        title: 'Error.',
        description: 'No pudimos enviar tu mensaje. Inténtalo de nuevo.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={8} maxW="700px" mx="auto" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">

      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>

          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <Input
              id="name"
              placeholder="Tu nombre"
              {...register('name', { required: 'El nombre es obligatorio' })}
            />
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              {...register('email', {
                required: 'El email es obligatorio',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Email inválido',
                },
              })}
            />
          </FormControl>
        </SimpleGrid>

        <FormControl mt={6} isInvalid={errors.phone}>
          <FormLabel htmlFor="phone">Teléfono</FormLabel>
          <Input
            id="phone"
            type="tel"
            placeholder="Tu teléfono"
            {...register('phone', { required: 'El teléfono es obligatorio' })}
          />
        </FormControl>

        <FormControl mt={6} isInvalid={errors.subject}>
          <FormLabel htmlFor="subject">Asunto</FormLabel>
          <Input
            id="subject"
            placeholder="¿En qué podemos ayudarte?"
            {...register('subject', { required: 'El asunto es obligatorio' })}
          />
        </FormControl>

        <FormControl mt={6} isInvalid={errors.message}>
          <FormLabel htmlFor="message">Mensaje</FormLabel>
          <Textarea
            id="message"
            placeholder="Cuéntanos más detalles..."
            {...register('message', { required: 'El mensaje es obligatorio' })}
          />
        </FormControl>

        <Button 
          mt={8}
          bg="buttonBg"
          color="buttonText"
          isLoading={isSubmitting} 
          type="submit"
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
}