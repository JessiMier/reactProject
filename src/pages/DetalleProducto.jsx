import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import { CartContext } from "../context/CartContext";

const DetalleProducto = () => {
  const { productos, cart, handleAddToCart, handleDeleteFromCart } =
    useContext(CartContext);

  const { id } = useParams();
  const producto = productos.find((item) => String(item.id) === id);

  if (!producto) {
    return (
      <>
        <Header cartItems={cart} borrarProducto={handleDeleteFromCart} />
        <div className="container my-5 text-center">
          <p className="text-danger fw-bold">Producto no encontrado</p>
        </div>
        <Footer />
      </>
    );
  }

  const cantidadEnCarrito =
    cart.find((item) => item.id === producto.id)?.quantity || 0;

  return (
    <>
      <Header cartItems={cart} borrarProducto={handleDeleteFromCart} />

      <main className="container my-5 d-flex justify-content-center">
        <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "550px" }}>
          <div className="card-body text-center">
            {producto.img && (
              <img
                src={producto.img}
                alt={producto.name}
                className="img-fluid mb-3 rounded"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            )}

            <h2 className="card-title mb-3 fs-2">{producto.name}</h2>
            <p className="card-text fs-4">{producto.description}</p>
            <p className="fw-bold fs-5">Precio: ${producto.price}</p>
            <p className="text-muted fs-5">
              Cantidad en carrito: {cantidadEnCarrito}
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
              <button
                className="btn btn-primary fs-5"
                onClick={() => handleAddToCart({ ...producto, quantity: 1 })}
              >
                Agregar al carrito
              </button>

              {cantidadEnCarrito > 0 && (
                <button
                  className="btn btn-success fs-5"
                  onClick={() => handleDeleteFromCart(producto)}
                >
                  Quitar del carrito
                </button>
              )}

              <Link to="/" className="btn btn-outline-secondary fs-5">
                Volver a la tienda
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DetalleProducto;
