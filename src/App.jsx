import "./App.css";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import Home from "./pages/Home";
import AcercaDe from "./pages/AcercaDe";
import GaleriaDeProductos from "./pages/GaleriaDeProductos";
import Contactos from "./pages/Contactos";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import DetalleProducto from "./pages/DetalleProducto";
import Login from "./pages/Login";
import RutaProtegida from "./auth/RutaProtegida";

function App() {
  const { isAuthenticated } = useContext(CartContext);
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
          <RutaProtegida isAuthenticated={isAuthenticated}>
            {" "}
            <Admin />{" "}
          </RutaProtegida>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
