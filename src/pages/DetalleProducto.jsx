import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";

const DetalleProducto = ({ productos, agregarCarrito, borrarProducto, cart }) => {
  const { id } = useParams();
  const producto = productos.find((item) => item.id === parseInt(id));

  if (!producto) {
    return (
      <>
        <Header cartItems={cart} borrarProducto={borrarProducto} />
        <p style={{ textAlign: "center", color: "red" }}>Producto no encontrado</p>
        <Footer />
      </>
    );
  }

  const cantidadEnCarrito = cart.find((item) => item.id === producto.id)?.quantity || 0;

  return (
    <>
      <Header cartItems={cart} borrarProducto={borrarProducto} />
      <main>
      <div style={{ padding: "2rem", backgroundColor: "#3f3f3f", width: "400px", textAlign: "center", margin: "auto",
        boxShadow: "0 2px 8px rgba(223, 214, 214, 0.81)"
       }}>
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <p>Precio: ${producto.price}</p>
        <p>Cantidad en carrito: {cantidadEnCarrito}</p>

        <button onClick={() => agregarCarrito({ ...producto, quantity: 1 })}>
          Agregar al carrito
        </button>

        {cantidadEnCarrito > 0 && (
          <button onClick={() => borrarProducto(producto)} style={{ marginLeft: "10px" }}>
            Quitar del carrito
          </button>
        )}
      </div>
      </main>
      <Footer />
    </>
  );
};

export default DetalleProducto;
