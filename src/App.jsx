import { Routes, Route } from 'react-router-dom'
import { ProductoProvider } from "./contexts/ProductoProvider.jsx"
import Header from "./components/Header/Header.jsx"
import Inicio from "./pages/Inicio/inicio.jsx"
import Stock from "./pages/Stock/Stock.jsx"


const App = () => {
  return (
    <>
      <Header />
      <ProductoProvider> 
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
      </ProductoProvider>
    </>
  )
}

export default App
 