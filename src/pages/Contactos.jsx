import React, { useContext } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import { CartContext } from "../context/CartContext";

const Contactos = () => {
  const { cart, handleDeleteFromCart } = useContext(CartContext);

  return (
    <>
      <Header borrarProducto={handleDeleteFromCart} cartItems={cart} />
      <main>
        <h1>Contactos</h1>
      </main>
      <Footer />
    </>
  );
};

export default Contactos;
