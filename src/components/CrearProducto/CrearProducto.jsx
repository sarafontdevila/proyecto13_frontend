import {
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody, useToast
} from "@chakra-ui/react";
import {useProductos} from "../../customHook/useProductos";
import FormularioProducto from "../FormularioProducto/FormularioProducto.jsx";

export default function CrearProducto({ isOpen, onClose }) {
  const toast = useToast();
  const { createProducto} = useProductos()

  const handleCrear = async (data) => {
    try {
      const formData = new FormData();

      const fileList = data.imagen
      if (fileList?.[0] instanceof File) {
        formData.append ("imagen", fileList [0])
      }
      
      
      Object.keys(data).forEach((key) => {
        if (key === "imagen") return;
        const value = data[key];
        if (value !== null && value !== undefined && value !== '') {
          console.log(`➕ Agregando: ${key} =`, value);
          formData.append(key, value);
      }
    });
    await createProducto(formData); 

      toast({
        title: "Producto creado",
        description: "El producto se ha creado correctamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      onClose?.(true);
    } catch (error) {
      console.error("Error al crear producto:", error?.response?.status,
        error?.response?.data);
      toast({
        title: "Error",
        description: "No se pudo crear el producto.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      onClose?.(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent maxW="900px">
        <ModalHeader>Crear Producto</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormularioProducto 
            onSubmit={handleCrear} 
            submitText="Crear" 
            toastHandler={toast} 
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
