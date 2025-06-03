import React, { useContext } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import loading from "../assets/loading2.gif";
import { AppContext } from "../context/AppContext"; 

const GaleriaDeProductos = () => {
  const { productos, cargando, handleAddToCart, cart, handleDeleteFromCart } = useContext(AppContext);

  return (
    <>
      <Header borrarProducto={handleDeleteFromCart} cartItems={cart} />
      <h1>Galeria De Productos</h1>
      {cargando ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <img src={loading} alt="loading" />
        </div>
      ) : (
        <ProductList agregarCarrito={handleAddToCart} productos={productos} />
      )}
      <Footer />
    </>
  );
};

export default GaleriaDeProductos;

