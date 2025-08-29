/*import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import FormularioProducto from "../FormularioProducto/FormularioProducto.jsx"

export default function CrearProducto({isOpen, onClose}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent maxW="900px">
        <ModalHeader>Crear Producto</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormularioProducto onExito={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}*/

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
      Object.keys(data).forEach((key) => formData.append(key, data[key]));

      await createProducto(formData)

      toast({
        title: "Producto creado",
        description: "El producto se ha creado correctamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      onClose();
    } catch (error) {
      console.error("Error al crear producto:", error);
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
