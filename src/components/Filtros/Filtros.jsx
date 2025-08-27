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
        <option value="Grúa articulada">Grúa articulada</option>
        <option value="Grúa hidráulica">Grúa hidráulica</option>
        <option value="Grúa sobre camión">Grúa sobre camión</option>
        <option value="Grúa telescópica">Grúa telescópica</option>
      </Select>

      <Select
        placeholder="Marca"
        name="marca"
        value={filtros.marca}
        onChange={(e) => handleFiltroChange(e.target.name, e.target.value)}
      >
            <option value="Dongfeng">Dongfeng</option>
            <option value="Effer">Effer</option>
            <option value="Fassi">Fassi</option>
            <option value="FAW">FAW</option>
            <option value="Grove">Grove</option>
            <option value="Hiab">Hiab</option>
            <option value="Hino">Hino</option>
            <option value="HMF">HMF</option>
            <option value="Kobelco">Kobelco</option>
            <option value="Liebherr">Liebherr</option>
            <option value="Link-Belt">Link-Belt</option>
            <option value="Manitex">Manitex</option>
            <option value="National Crane">National Crane</option>
            <option value="Palfinger">Palfinger</option>
            <option value="PM">PM</option>
            <option value="SANY">SANY</option>
            <option value="Tadano">Tadano</option>
            <option value="Terex">Terex</option>
            <option value="XCMG">XCMG</option>
            <option value="Zoomlion">Zoomlion</option>
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