import { Routes, Route } from 'react-router-dom'
import { ProductoProvider } from "./contexts/ProductoProvider.jsx"
import Header from "./components/Header/Header.jsx"
import Inicio from "./pages/Inicio/inicio.jsx"
import Stock from "./pages/Stock/Stock.jsx"
import Servicios from "./pages/Servicios/Servicios.jsx"
import Footer from './pages/Footer/Footer.jsx'
import Contacto from './pages/Contacto/Contacto.jsx'


const App = () => {
  return (
    <>
      <Header />
      <ProductoProvider> 
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </ProductoProvider>
    </>
  )
}

export default App
 