import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Productos = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const { handleAddToCart } = useContext(CartContext);

  const increase = () =>
    setCantidad((prev) => (prev < producto.stock ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="card h-100 shadow-sm">
      <div className="imagen-container">
        <img
          src={producto.img}
          alt={producto.name}
          className="imagen-producto"
        />
      </div>

      <div className="card-body d-flex flex-column justify-content-between text-center p-2">
        <h6 className="card-title mb-1 fs-4">{producto.name}</h6>
        <p className="card-text fw-bold mb-2 text-primary fs-5">
          ${producto.price}
        </p>

        <div className="d-flex align-items-center justify-content-center mb-2 fs-5">
          <button
            className="btn btn-outline-secondary btn-m me-2 fs-5"
            onClick={decrease}
          >
            -
          </button>
          <span className="fw-bold">{cantidad}</span>
          <button
            className="btn btn-outline-secondary btn-m ms-2 fs-5"
            onClick={increase}
          >
            +
          </button>
        </div>

        <button
          className="btn btn-primary btn-sm mb-2 fs-5"
          onClick={() => {
            handleAddToCart({ ...producto, quantity: cantidad });
            setCantidad(1);
          }}
        >
          Agregar al carrito
        </button>

        <Link
          to={`/producto/${producto.id}`}
          className="btn btn-outline-info btn-m fw-bold fs-5"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Productos;
