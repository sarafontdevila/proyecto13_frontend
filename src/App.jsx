import { Routes, Route } from 'react-router-dom'
import { ProductoProvider } from "./contexts/ProductoProvider.jsx"
import Header from "./components/Header/Header.jsx"
import Inicio from "./pages/Inicio/inicio.jsx"
import Stock from "./pages/Stock/Stock.jsx"
import Servicios from "./pages/Servicios/Servicios.jsx"
import Footer from './pages/Footer/Footer.jsx'
import Contacto from './pages/Contacto/Contacto.jsx'
import MiEspacio from './pages/MiEspacio/MiEspacio.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'

const App = () => {
  return (
    <>
      <Header />  
      <ProductoProvider>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/miespacio" element={<MiEspacio/> } />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </ProductoProvider>
      <Footer />
    </>
  );
};

export default App;