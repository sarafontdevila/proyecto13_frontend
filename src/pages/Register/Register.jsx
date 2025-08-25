import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Container,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const toast = useToast();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message || "Error en login");

      localStorage.setItem("token", result.token);
      
      toast({
        title: 'Usuario registrado',
        description: 'Te has registrado correctamente',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      reset();

    } catch (error) {
      console.error('Error al registrarse:', error);
      toast({
        title: 'Error.',
        description: 'No pudimos registrarte. Inténtalo de nuevo.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Box minH="100vh" bg="section.dark" display="flex" alignItems="center" justifyContent="center" p={4}>
      <Box
        p={12}
        maxW={{ base: "95%", md: "600px", lg: "700px" }}
        w="full"
        borderWidth="2px"
        borderColor="brand.800"
        borderRadius="xl"
        bg="section.dark"
        boxShadow="2xl"
      >
        <Heading as="h1" size="xl" mb={8} textAlign="center" color="section.darkText">
          Registro
        </Heading>
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.name} mb={6}>
            <FormLabel htmlFor="name" color="section.darkText" fontSize="lg">
              Nombre
            </FormLabel>
            <Input
              id="name"
              placeholder="Tu nombre"
              size="lg"
              bg="brand.900"
              borderColor="brand.700"
              color="section.darkText"
              _placeholder={{ color: "brand.200" }}
              _hover={{ borderColor: "brand.600" }}
              _focus={{ borderColor: "brand.400", boxShadow: "0 0 0 1px #f97316" }}
              {...register("name", { required: "El nombre es obligatorio" })}
            />
          </FormControl>

          <FormControl isInvalid={errors.email} mb={6}>
            <FormLabel htmlFor="email" color="section.darkText" fontSize="lg">
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              size="lg"
              bg="brand.900"
              borderColor="brand.700"
              color="section.darkText"
              _placeholder={{ color: "brand.200" }}
              _hover={{ borderColor: "brand.600" }}
              _focus={{ borderColor: "brand.400", boxShadow: "0 0 0 1px #f97316" }}
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Email inválido",
                },
              })}
            />
          </FormControl>

          <FormControl isInvalid={errors.password} mb={8}>
            <FormLabel htmlFor="password" color="section.darkText" fontSize="lg">
              Password
            </FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="*****"
              size="lg"
              bg="brand.900"
              borderColor="brand.700"
              color="section.darkText"
              _placeholder={{ color: "brand.200" }}
              _hover={{ borderColor: "brand.600" }}
              _focus={{ borderColor: "brand.400", boxShadow: "0 0 0 1px #f97316" }}
              {...register("password", {
                required: "El password es obligatorio",
                /*pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "El password debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo especial",
                },*/
              })}
            />
          </FormControl>

          <Button
            bg="buttonBg"
            color="buttonText"
            size="lg"
            isLoading={isSubmitting}
            type="submit"
            width="full"
            _hover={{ bg: "brand.600" }}
            _active={{ bg: "brand.700" }}
            fontSize="lg"
            py={6}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Box>
  )

}