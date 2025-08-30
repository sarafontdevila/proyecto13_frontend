import {
  Button,
  useDisclosure,
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody,
  useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import FormularioProducto from "../FormularioProducto/FormularioProducto.jsx";
import { useProductos } from "../../customHook/useProductos.js";

export default function BotonEditar( {productoId}){const { updateProducto } = useProductos();
const { isOpen, onOpen, onClose } = useDisclosure();
const toast = useToast();

const handleSubmit = async (values) => {
  try {
    const hasFile = values?.imagen && values.imagen[0] instanceof File;

    let payload = values;
    if (hasFile) {
      const form = new FormData();
      Object.entries(values).forEach(([k, v]) => {
        if (k === "imagen") {
          if (v[0]) form.append("imagen", v[0]);
        } else {
          form.append(k, v);
        }
      });
      payload = form;
    }

    await updateProducto(productoId, payload, !!hasFile);

    toast({
      title: "Producto actualizado",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
    onClose();
  } catch (e) {
    toast({
      title: "Error al actualizar",
      description: e?.response?.data?.message || e?.message || "Inténtalo de nuevo.",
      status: "error",
      duration: 4000,
      isClosable: true,
      position: "top-right",
    });
  }
};

return (
  <>
    <Button
      leftIcon={<EditIcon />}
      colorScheme="orange"
      w="100%"
      onClick={onOpen}
    >
      Editar
    </Button>

    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar producto</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
  
          <FormularioProducto
            submitText="Guardar cambios"
            onSubmit={handleSubmit}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
);
}
