import { useContext } from "react";
import Footer from "../components/estaticos/Footer";
import Header from "../components/estaticos/Header";
import { CartContext } from "../context/CartContext";

const AcercaDe = () => {
  const { cart, handleDeleteFromCart } = useContext(CartContext);

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
