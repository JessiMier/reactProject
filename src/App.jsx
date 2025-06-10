import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AcercaDe from "./pages/AcercaDe";
import GaleriaDeProductos from "./pages/GaleriaDeProductos";
import Contactos from "./pages/Contactos";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import DetalleProducto from "./pages/DetalleProducto";
import Login from "./pages/Login";
import RutaProtegida from "./auth/RutaProtegida";
import Denegado from "./pages/Denegado"; // ← añadí esta página si no existe

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/acercade" element={<AcercaDe />} />
      <Route path="/productos" element={<GaleriaDeProductos />} />
      <Route path="/producto/:id" element={<DetalleProducto />} />
      <Route path="/contacto" element={<Contactos />} />
      
      <Route
        path="/admin"
        element={
          <RutaProtegida roleRequired="admin">
            <Admin />
          </RutaProtegida>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/denegado" element={<Denegado />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

