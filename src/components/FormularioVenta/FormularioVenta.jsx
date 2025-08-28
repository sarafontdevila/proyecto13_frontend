import { useToast } from "@chakra-ui/react"
import FormularioBase from "../FormularioBase/FormularioBase.jsx"
import axios from "axios"

export default function FormularioVenta({ productoId, onExito}) {
  const toast = useToast()

  const fields = [
    {
      name: "metodoPago",
      label: "Método de Pago",
      type: "text",
      placeholder: "Ej: Tarjeta, Transferencia",
      validation: { required: "El método de pago es obligatorio" },
    },
    {
      name: "fechaEntrega",
      label: "Fecha de Entrega",
      type: "date",
      placeholder: "dd/mm/aaaa",
      validation: {},
    },
  ]

  const handleVenta = async (data, toast) => {
    try {
      await axios.post ("http://localhost:3000/api/v1/ventas", {
        producto: productoId,
        metodoPago: data.metodoPago,
        fechaEntrega: data.fechaEntrega || null,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
      }
    );

      toast({
        title: "!Compra realizada!",
        description: "La compra se ha creado correctamente. Ve a 'Mi espacio' para verla",
        status: "success",
        duration: 5000,
        isClosable: true
      })
      onExito?.()
      
    } catch (error) {
      console.error("Error al crear la venta:", error)

      toast({
        title: "Error en la compra",
        description: "No se pudo crear la compra.",
        status: "error",
        duration: 5000,
        isClosable: true
      })
      
    }
  }

return (
  <FormularioBase
    fields={fields}
    submitText= "Confirmar Compra"
    onSubmit={(data) => handleVenta(data, toast)}
    maxW="100%"
    mx="auto"
    p={4}
  />
)
}