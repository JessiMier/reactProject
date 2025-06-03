import React, { useContext } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import { AppContext } from "../context/AppContext"; 

const Contactos = () => {
  const { cart, handleDeleteFromCart } = useContext(AppContext);

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

