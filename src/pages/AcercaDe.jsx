import React, { useContext } from "react";
import Footer from "../components/estaticos/Footer";
import Header from "../components/estaticos/Header";
import { AppContext } from "../context/AppContext"; 

const AcercaDe = () => {
  const { cart, handleDeleteFromCart } = useContext(AppContext);

  return (
    <>
      <Header borrarProducto={handleDeleteFromCart} cartItems={cart} />
      <main>
        <h1>Acerca De</h1>
      </main>
      <Footer />
    </>
  );
};

export default AcercaDe;
