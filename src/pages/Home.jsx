import React, { useContext } from "react";
import Footer from "../components/estaticos/Footer";
import Header from "../components/estaticos/Header";
import ProductList from "../components/ProductList";
import loading from "../assets/loading2.gif";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const {
    cart,
    productos,
    cargando,
    handleAddToCart,
    handleDeleteFromCart,
  } = useContext(AppContext);

  return (
    <>
      <Header borrarProducto={handleDeleteFromCart} cartItems={cart} />
      <main>
        <h1>Bienvenidos a Urbaniza</h1>
        <p className="intro">
          🏃‍♀️ Ropa deportiva con flow urbano y básicos para tu día a día. Entrená, salí, viví tu día con onda
          y comodidad. Conocé nuestra colección y llevá tu estilo a otro nivel.
          🔥 Nuevos lanzamientos todas las semanas.
        </p>
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
      </main>
      <Footer />
    </>
  );
};

export default Home;