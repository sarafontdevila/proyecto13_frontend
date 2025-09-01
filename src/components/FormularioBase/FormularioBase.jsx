
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  VStack,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"

export default function FormularioBase({ fields, submitText = "Enviar", onSubmit, toastHandler, initialValues= {}, ...props }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm( { defaultValues:initialValues})

  const handleFormSubmit = async (data) => {
    if (toastHandler) {
      await onSubmit(data, toastHandler)
    } else {
      await onSubmit(data)
    }
  }

  return (
    <Box as="form" onSubmit={handleSubmit(handleFormSubmit)} {...props}>
      <VStack spacing={4} align="stretch">
        {fields.map((field) => (
          <FormControl key={field.name} isInvalid={errors[field.name]}>
            <FormLabel htmlFor={field.name}>{field.label}</FormLabel>

            {field.type === "textarea" ? (
              <Textarea id={field.name} placeholder={field.placeholder} {...register(field.name, field.validation)} />
            ) : field.type === "select" ? (
              <Select id={field.name} placeholder={field.placeholder} {...register(field.name, field.validation)}>
                {field.options?.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </Select>
            ) : (
              <Input id={field.name} type={field.type} placeholder={field.placeholder} {...register(field.name, field.validation)} />
            )}
          </FormControl>
        ))}
      </VStack>

      <Button mt={6} bg="buttonBg" color="buttonText" isLoading={isSubmitting} type="submit">
        {submitText}
      </Button>
    </Box>
  )
}
