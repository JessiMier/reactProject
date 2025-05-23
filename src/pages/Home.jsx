import React from "react";
import Footer from "../components/estaticos/Footer";
import Header from "../components/estaticos/Header";
import ProductList from "../components/ProductList";
import loading from "../assets/loading2.gif";

const Home = ({
  cart,
  productos,
  cargando,
  agregarCarrito,
  borrarProducto,
}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
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
          <ProductList agregarCarrito={agregarCarrito} productos={productos} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
