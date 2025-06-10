import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./styleProductos.css";

const Productos = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const { handleAddToCart } = useContext(CartContext);

  const increase = () =>
    setCantidad((prev) => (prev < producto.stock ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <section className="card">
      <div className="imagenContainer">
        <img className="imagen" src={producto.img} alt="" />
      </div>
      <h3 className="nombre">{producto.name}</h3>
      <p className="precio">${producto.price}</p>
      <p className="stock">{producto.stock}</p>
      <div className="cantidadContainer">
        <button className="qtyButton" onClick={decrease}>
          -
        </button>
        <span style={{ color: "blue" }}>{cantidad}</span>
        <button className="qtyButton" onClick={increase}>
          +
        </button>
      </div>
      <button
        onClick={() => handleAddToCart({ ...producto, quantity: cantidad })}
      >
        Agregar al carrito
      </button>

      <Link to={`/producto/${producto.id}`} className="detalle-link">
        Ver detalle
      </Link>
    </section>
  );
};

export default Productos;
