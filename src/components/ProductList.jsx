import { useContext } from "react";
import Productos from "./Productos";
import "./styleProductos.css";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const { productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);

  return (
    <div className="container-fluid my-4 product-list">
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control fs-4 mt-4"
            placeholder="Buscar productos"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      <div className="row mt-4 justify-content-center">
        {productosFiltrados.length === 0 ? (
          <div className="col-12 text-center">
            <p>No se encontraron productos.</p>
          </div>
        ) : (
          productosFiltrados.map((producto) => (
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-4" key={producto.id}>
              <Productos producto={producto} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;




