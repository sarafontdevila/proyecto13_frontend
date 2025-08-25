import { useToast } from "@chakra-ui/react"
import FormularioBase from "../FormularioBase/FormularioBase.jsx"

export default function FormularioContacto() {
  const toast = useToast()

  const fields = [
    { name: "name", label: "Nombre", type: "text", placeholder: "Tu nombre", validation: { required: "El nombre es obligatorio" } },

    { name: "apellido", label: "Apellido", type: "text", placeholder: "Tu apellido", validation: { required: "El apellido es obligatorio" } },

    { name: "email", label: "Email", type: "email", placeholder: "tu@email.com", validation: { required: "El email es obligatorio" } },

    { name: "message", label: "Mensaje", type: "textarea", placeholder: "Cuéntanos más detalles...", validation: { required: "El mensaje es obligatorio" }, fullWidth: true },
  ]

  const handleContacto = async (data, toast) => {
    try {
      console.log("Enviando contacto:", data)
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos, te responderemos pronto.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      console.error("Error al enviar el contacto:", error)
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <FormularioBase
      fields={fields}
      submitText="Enviar"
      onSubmit={handleContacto}
      toastHandler={toast}
      maxW="700px"
      mx="auto"
      p={8}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    />
  )
}
