import { Box } from "@chakra-ui/react";
import FormularioBase from "../FormularioBase/FormularioBase.jsx";

const FormularioProducto = ({ onSubmit, submitText = "Enviar", toastHandler, initialValues = {} }) => {
  const fields = [
    { name: "vehiculo", label: "Vehículo", type: "text", placeholder: "Ej: HUZ00059bQ87731", validation: { required: "El vehículo es obligatoria" } },
    { name: "marca", label: "Marca", type: "text", placeholder: "Ej: MAN", validation: { required: "La marca es obligatoria" } },
    { name: "modelo", label: "Modelo", type: "text", placeholder: "Ej: TGS 18.440", validation: { required: "El modelo es obligatorio" } },
    { name: "tipo", label: "Tipo", type: "text", placeholder: "Camión grúa, trailer...", validation: { required: "El tipo es obligatorio" } },
    { name: "anyoFabricacion", label: "Año de fabricación", type: "number", placeholder: "Ej: 2018", validation: { required: "El año es obligatorio" } },
    { name: "kilometraje", label: "Kilometraje", type: "number", placeholder: "Ej: 200000", validation: { required: "El kilometraje es obligatorio" } },
    { name: "estado", label: "Estado", type: "text", placeholder: "Nuevo, Usado, Reparado...", validation: { required: "El estado es obligatorio" } },
    { name: "precioVenta", label: "Precio de venta (€)", type: "number", placeholder: "Ej: 50000", validation: { required: "El precio es obligatorio" } },
    { name: "fechaAdquisicion", label: "Fecha de adquisición", type: "date", placeholder: "dd/mm/aaaa", validation: { required: "La fecha de adquisición es obligatoria" } },
    { name: "imagen", label: "Imagen", type: "file", placeholder: "Sube una imagen" }
  ];

  return (
    <Box>
      <FormularioBase
        fields={fields}
        submitText={submitText}
        onSubmit={onSubmit}
        toastHandler={toastHandler}
        initialValues = {initialValues}
      />
    </Box>
  );
};

export default FormularioProducto;
