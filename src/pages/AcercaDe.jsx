import React from "react";
import Footer from "../components/estaticos/Footer";
import Header from "../components/estaticos/Header";

const AcercaDe = ({cart, borrarProducto}) => {
  return (
    <>
      <Header  borrarProducto={borrarProducto} cartItems={cart} />
     <main>

      <h1>Acerca De</h1>
      </main>
      <Footer />
    </>
  );
};

export default AcercaDe;
