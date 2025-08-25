import { Select, Button, SimpleGrid } from '@chakra-ui/react';
import { useProductos } from "../../customHook/useProductos"

const Filtros = () => {
  const { filtros, handleFiltroChange, handleFiltroReset } = useProductos()

  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb={4}>
      <Select
        placeholder="Tipo de grúa"
        name="tipo"
        value={filtros.tipo}
        onChange={(e) => handleFiltroChange(e.target.name, e.target.value)}
      >
        <option value="Grúa móvil">Grúa móvil</option>
        <option value="Grúa torre">Grúa torre</option>
      </Select>

      <Select
        placeholder="Marca"
        name="marca"
        value={filtros.marca}
        onChange={(e) => handleFiltroChange(e.target.name, e.target.value)}
      >
        <option value="Grove">Grove</option>
        <option value="Fassi">Fassi</option>
        <option value="Liebherr">Liebherr</option>
      </Select>

      <Select
        placeholder="Precio"
        name="precio"
        value={filtros.precio}
        onChange={(e) => handleFiltroChange(e.target.name, e.target.value)}
      >
        <option value="0-50000">Menos de €50.000</option>
        <option value="50001-100000">€50.001 - €100.000</option>
        <option value="100001-200000">€100.001 - €200.000</option>
        <option value="200001-1000000">Más de €200.000</option>
      </Select>
      
      <Button onClick={handleFiltroReset}>Restablecer Filtros</Button>
    </SimpleGrid>
  )
}

export default Filtros