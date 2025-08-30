import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../customHook/useAuth.js";
import FormularioVenta from "../FormularioVenta/FormularioVenta.jsx";

const BotonComprar = ({ productoId, marca, modelo, vendido = false }) => {
  const {user} = useAuth();
  const isAuth = user ? true : false;
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (vendido) {
    return (
      <Button
        bg="buttonSecondaryBg"
        color="buttonSecondaryText"
        size="lg"
        w="100%"
        borderRadius="8px"
        fontWeight="700"
        isDisabled
        cursor="not-allowed"
        _hover={{ bg: "buttonSecondaryBg" }}
        _active={{ bg: "buttonSecondaryBg" }}
      >
        ¡Comprado!
      </Button>
    );
  }
    if (!isAuth) {
      return (
        <Button
          as={Link}
          to="/login"
          bg="buttonSecondaryBg"
          color="buttonSecondaryText"
          size="lg"
          w="100%"
          borderRadius="8px"
          fontWeight="600"
          _hover={{ bg: "buttonSecondaryHover" }}
          _active={{ bg: "buttonSecondaryActive" }}
        >
          Iniciar sesión
        </Button>
      );
    }
  
  return (
    <>
      <Button
        bg="buttonSecondaryBg"
        color="buttonSecondaryText"
        size="lg"
        w="100%"
        borderRadius="8px"
        fontWeight="600"
        _hover={{ bg: "buttonSecondaryHover" }}
        _active={{ bg: "buttonSecondaryActive" }}
        onClick={onOpen}
      >
        Comprar
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Comprar {marca} {modelo}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormularioVenta productoId={productoId} onExito={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BotonComprar;

