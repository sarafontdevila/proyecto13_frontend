import { IconButton,
  useToast,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { useRef, useState } from "react";
import { useProductos } from "../../customHook/useProductos.js" 


export default function BotonBorrar({
  productoId,
  marca,
  modelo,
  anyoFabricacion,
  size = "sm",
}) {
  const { deleteProducto } = useProductos();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const nombre = `${marca} ${modelo} (${anyoFabricacion})`;

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await deleteProducto(productoId);
      toast({
        title: "Producto eliminado",
        description: `${nombre} ha sido borrado.`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      onClose();
    } catch (error) {
      console.error("Error al borrar producto:", error);
      toast({
        title: "Error",
        description: "No se pudo borrar el producto.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <IconButton
        aria-label="Borrar producto"
        icon={<DeleteIcon />}
        colorScheme="red"
        size={size}
        onClick={onOpen}
        position="absolute"
        top="8px"
        right="8px"
        zIndex={2}
      />

      <AlertDialog
        isOpen={isOpen}
        onClose={loading ? undefined : onClose}
        leastDestructiveRef={cancelRef}  
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar producto
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Seguro que quieres borrar <b>{nombre}</b>? Esta acción no se puede deshacer.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} variant="outline" isDisabled={loading}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={handleConfirm} ml={3} isLoading={loading}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}