import { useContext } from "react";
import Productos from "./Productos";
import "./styleProductos.css";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const { productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);

  console.log(busqueda);

  return (
    <>
      <input
        type="text"
        placeholder="Buscar productos"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "20px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          fontSize: "16px",
        }}
      />
      <div className="product-list">
        {productosFiltrados.length === 0 ? (
          <p>No se encontraron productos.</p>
        ) : (
          productosFiltrados.map((producto) => (
            <div className="product-item" key={producto.id}>
              <Productos key={producto.id} producto={producto} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ProductList;
