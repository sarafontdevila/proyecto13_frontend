/*import {
  Box,
  VStack,
  useToast,
  Container, 
  Icon, 
  Heading,
  Text
} from "@chakra-ui/react";
import { FiPackage } from "react-icons/fi";
import FormularioBase from "../FormularioBase/FormularioBase.jsx";
import axios from "axios";

export default function FormularioProducto({ onExito }) {
  const toast = useToast();

  const fields = [
    
    { name: "vehiculo", label: "Vehículo", type: "text", placeholder: "ID del vehículo o referencia", validation: { required: "El vehículo es obligatorio" } },
    { name: "marca", label: "Marca", type: "text", placeholder: "Ej: MAN, Iveco...", validation: { required: "La marca es obligatoria" } },
    { name: "modelo", label: "Modelo", type: "text", placeholder: "Ej: TGS 18.440", validation: { required: "El modelo es obligatorio" } },
    { name: "tipo", label: "Tipo", type: "text", placeholder: "Camión grúa, tráiler...", validation: { required: "El tipo es obligatorio" } },
    { name: "anyoFabricacion", label: "Año de Fabricación", type: "number", placeholder: "Ej: 2018", validation: { required: "El año es obligatorio" } },
    { name: "kilometraje", label: "Kilometraje", type: "number", placeholder: "Ej: 120000", validation: { required: "El kilometraje es obligatorio" } },
    { name: "estado", label: "Estado", type: "text", placeholder: "Nuevo, usado...", validation: { required: "El estado es obligatorio" } },
    { name: "precioVenta", label: "Precio Venta (€)", type: "number", placeholder: "Ej: 45000", validation: { required: "El precio es obligatorio" } },
    { name: "fechaAdquisicion", label: "Fecha de Adquisición", type: "date", placeholder: "dd/mm/aaaa", validation: { required: "La fecha de adquisición es obligatoria" } },
    { name: "imagen", label: "Imagen", type: "file", placeholder: "Sube una imagen", validation: {} },
  ];
  const handleProducto = async (data, toast) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "imagen" && data.imagen?.[0]) {
          formData.append("imagen", data.imagen[0]);
        } else {
          formData.append(key, data[key]);
        }
      });
      await axios.post("http://localhost:3000/api/v1/productos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast({
        title: "Producto creado",
        description: "El producto se ha creado correctamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      onExito?.();
    } catch (error) {
      console.error("Error al crear producto:", error?.response?.status,
        error?.response?.data || error?.message);
      toast({
        title: "Error",
        description: "No se pudo crear el producto.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Container maxW="7xl" py={12}>
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
                <Icon as={FiPackage} w={8} h={8} color="blue.600" />
              </Box>
              <Heading size="lg" color="sectionText" textAlign="center">
                Crear nuevo producto
              </Heading>
              <Text color="sectionText" opacity={0.8} textAlign="center" fontSize="sm">
                Completa los datos para añadir un nuevo camión a la base de datos.
              </Text>
            </VStack>

            <FormularioBase
              fields={fields}
              submitText="Crear Producto"
              onSubmit={handleProducto}
              toastHandler={toast}
            />
          </VStack>
        </Box>
    </Container>
  );
}*/
import { Box, VStack } from "@chakra-ui/react";
import FormularioBase from "../FormularioBase/FormularioBase.jsx";

export default function FormularioProducto({ onSubmit, submitText = "Enviar", toastHandler }) {
  const fields = [
    { name: "marca", label: "Marca", type: "text", placeholder: "Ej: MAN", validation: { required: "La marca es obligatoria" } },
    { name: "modelo", label: "Modelo", type: "text", placeholder: "Ej: TGS 18.440", validation: { required: "El modelo es obligatorio" } },
    { name: "tipo", label: "Tipo", type: "text", placeholder: "Camión grúa, trailer...", validation: { required: "El tipo es obligatorio" } },
    { name: "anyoFabricacion", label: "Año de fabricación", type: "number", placeholder: "Ej: 2018", validation: { required: "El año es obligatorio" } },
    { name: "kilometraje", label: "Kilometraje", type: "number", placeholder: "Ej: 200000", validation: { required: "El kilometraje es obligatorio" } },
    { name: "estado", label: "Estado", type: "text", placeholder: "Nuevo, Usado, Reparado...", validation: { required: "El estado es obligatorio" } },
    { name: "precioVenta", label: "Precio de venta (€)", type: "number", placeholder: "Ej: 50000", validation: { required: "El precio es obligatorio" } },
    { name: "imagen", label: "Imagen", type: "file", placeholder: "Sube una imagen" }
  ];
  return (
    <Box>
      <FormularioBase
        fields={fields}
        submitText={submitText}
        onSubmit={onSubmit}
        toastHandler={toastHandler}
      />
    </Box>
  );
}