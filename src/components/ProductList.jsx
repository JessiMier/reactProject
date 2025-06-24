import { useContext } from "react";
import Productos from "./Productos";
import "./styleProductos.css";
import { CartContext } from "../context/CartContext";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";

const ProductList = () => {
  const { productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = productosFiltrados.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(productosFiltrados.length / itemsPerPage);

  return (
    <>
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
            currentProducts.map((producto) => (
              <div
                className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mb-4"
                key={producto.id}
              >
                <Productos producto={producto} />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="container d-flex justify-content-center mb-4">
        <Pagination>
          <Pagination.Prev
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          />
          {Array.from({ length: totalPages }, (_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => setCurrentPage((p) => Math.max(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </>
  );
};

export default ProductList;
