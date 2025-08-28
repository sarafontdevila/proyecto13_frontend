import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import FormularioBase from "../FormularioBase/FormularioBase.jsx";

export default function BorrarProducto({ isOpen, onClose }) {
  const toast = useToast();

  const fields = [
    { name: "marca", label: "Marca", type: "text", placeholder: "Ej: MAN", validation: { required: "La marca es obligatoria" } },
    { name: "modelo", label: "Modelo", type: "text", placeholder: "Ej: TGS 18.440", validation: { required: "El modelo es obligatorio" } },
    { name: "anyoFabricacion", label: "Año de fabricación", type: "number", placeholder: "Ej: 2018", validation: { required: "El año es obligatorio" } },
  ];

  const handleBorrar = async (data, toast) => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/productos", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const productos = res.data || [];
      
      const marca = (data.marca || "").trim().toLowerCase();
      const modelo = (data.modelo || "").trim().toLowerCase();
      const anyo = String(data.anyoFabricacion || "").trim();

      const matches = productos.filter((p) => {
        const m = (p.marca || "").trim().toLowerCase();
        const mod = (p.modelo || "").trim().toLowerCase();
        const a = String(p.anyoFabricacion || "").trim();
        return m === marca && mod === modelo && a === anyo;
      });

      if (matches.length === 0) {
        toast({
          title: "No encontrado",
          description: "No hay ningún producto con esa Marca, Modelo y Año.",
          status: "warning",
          duration: 4000,
          isClosable: true,
        });
        return;
      }

      if (matches.length > 1) {
        toast({
          title: "Múltiples coincidencias",
          description: "Hay más de un producto con esos datos. Afina la búsqueda o borra por ID.",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      // 3) Borrar por id
      const id = matches[0]._id;
      await axios.delete(`http://localhost:3000/api/v1/productos/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      toast({
        title: "Producto eliminado",
        description: `${matches[0].marca} ${matches[0].modelo} (${matches[0].anyoFabricacion}) ha sido borrado.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      onClose?.();
    } catch (error) {
      console.error(
        "Error al borrar producto:",
        error?.response?.status,
        error?.response?.data || error?.message
      );
      toast({
        title: "Error",
        description: error?.response?.data?.message || "No se pudo borrar el producto.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Borrar Producto</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormularioBase
            fields={fields}
            submitText="Borrar"
            onSubmit={handleBorrar}
            toastHandler={toast}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
