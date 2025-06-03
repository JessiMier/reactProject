import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext"; 
import Home from "./pages/Home";
import AcercaDe from "./pages/AcercaDe";
import GaleriaDeProductos from "./pages/GaleriaDeProductos";
import Contactos from "./pages/Contactos";
import NotFound from "./pages/NotFound";
import Admin from "./components/Admin";
import DetalleProducto from "./pages/DetalleProducto";
import Login from "./pages/Login";
import RutaProtegida from "./auth/RutaProtegida";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acercade" element={<AcercaDe />} />
          <Route path="/productos" element={<GaleriaDeProductos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/contacto" element={<Contactos />} />
          <Route
            path="/admin"
            element={
              <RutaProtegida>
                <Admin />
              </RutaProtegida>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;

