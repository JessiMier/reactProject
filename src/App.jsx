import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuth ]= useState(false);

  useEffect(() => {
    fetch("./data/data.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(() => {
          setProductos(datos);
          setCargando(false);
        }, 2000);
      })
      .catch((error) => {
        console.log("Error", error);
        setCargando(false);
        setError(true);
      });
  }, []);

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  const handleDeleteFromCart = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null
            : item
        )
        .filter((item) => item !== null)
    );
  };

  return (
    <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  borrarProducto={handleDeleteFromCart}
                  agregarCarrito={handleAddToCart}
                  cart={cart}
                  productos={productos}
                  cargando={cargando}
                />
              }
            />
            <Route
              path="/acercade"
              element={<AcercaDe borrarProducto={handleDeleteFromCart} cart={cart} />}
            />
            <Route
              path="/productos"
              element={
                <GaleriaDeProductos
                  borrarProducto={handleDeleteFromCart}
                  agregarCarrito={handleAddToCart}
                  cart={cart}
                  productos={productos}
                  cargando={cargando}
                />
              }
            />
            <Route
              path="/producto/:id"
              element={
                <DetalleProducto
                  productos={productos}
                  cart={cart}
                  agregarCarrito={handleAddToCart}
                  borrarProducto={handleDeleteFromCart}
                />
              }
            />
            <Route
              path="/contacto"
              element={<Contactos borrarProducto={handleDeleteFromCart} cart={cart} />}
            />
            <Route 
              path="admin"
              element={ <RutaProtegida isAuthenticated={isAuthenticated}> <Admin /> </RutaProtegida> } />
            
            <Route 
              path="login"
              element={<Login/>}
            /> 

            <Route path="/*" element={<NotFound />} />
          </Routes>
    </Router>
  );
}

export default App;

