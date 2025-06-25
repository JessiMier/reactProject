import { useState, useEffect } from "react";

function FormularioEdicion({ productoSeleccionado, onActualizar }) {
  const [producto, setProducto] = useState(productoSeleccionado);

  useEffect(() => {
    setProducto(productoSeleccionado);
  }, [productoSeleccionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Editar Producto</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onActualizar(producto);
        }}
        className="mx-auto shadow p-4 rounded bg-light"
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-3">
          <label className="form-label">ID:</label>
          <input
            type="text"
            className="form-control"
            value={producto.id || ""}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={producto.name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label fw-bold">
            Descripción:
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            rows={4}
            value={producto.description || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Precio:</label>
          <input
            type="number"
            name="price"
            className="form-control"
            step="0.01"
            value={producto.price || ""}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Stock:</label>
          <input
            type="number"
            name="stock"
            className="form-control"
            value={producto.stock || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Imagen URL:</label>
          <input
            type="text"
            name="img"
            className="form-control"
            value={producto.img || ""}
            onChange={handleChange}
            required
          />
        </div>

        {producto.img && (
          <div className="text-center mb-3">
            <img
              src={producto.img}
              alt="Vista previa"
              className="img-fluid rounded"
              style={{ maxHeight: "200px" }}
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        )}

        <div className="mb-4">
          <label className="form-label">Categoría:</label>
          <input
            type="text"
            name="category"
            className="form-control"
            value={producto.category || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary fs-5 px-4">
            Actualizar Producto
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioEdicion;
