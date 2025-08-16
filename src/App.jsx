import { ChakraProvider } from "@chakra-ui/react"
import { ProductoProvider } from "./contexts/ProductoProvider.jsx"
import Header from "./components/Header/Header.jsx"
import Inicio from "./pages/Inicio/inicio.jsx"

function App() {
  return (
      <ProductoProvider>
        <Header />
        <Inicio />
      </ProductoProvider>
  )
}

export default App

 