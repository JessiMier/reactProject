import { useState } from "react";

function FormularioProducto({ onAgregar }) {
  const [producto, setProducto] = useState({
    name: "",
    price: "",
    stock: "",
    img: "",
    category: "",
    description: "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!producto.name.trim()) {
      nuevosErrores.name = "El nombre es obligatorio.";
    }
    if (!producto.price || producto.price <= 0.0) {
      nuevosErrores.price = "El precio debe ser mayor a 0.00";
    }
    if (!producto.category.trim() || producto.category.length < 3) {
      nuevosErrores.category = "La categoría debe tener al menos 3 caracteres.";
    }
    if (!producto.description.trim() || producto.description.length < 10) {
      nuevosErrores.description =
        "La descripción debe tener al menos 10 caracteres.";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;
    onAgregar(producto);
    setProducto({
      name: "",
      price: "",
      stock: "",
      img: "",
      category: "",
    });
    setErrores({});
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Agregar Producto</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto shadow p-4 rounded bg-light"
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            name="name"
            className={`form-control ${errores.name ? "is-invalid" : ""}`}
            value={producto.name}
            onChange={handleChange}
          />
          {errores.name && (
            <div className="invalid-feedback">{errores.name}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción:</label>
          <textarea
            name="description"
            className={`form-control ${
              errores.description ? "is-invalid" : ""
            }`}
            value={producto.description}
            onChange={handleChange}
            rows={3}
          />
          {errores.description && (
            <div className="invalid-feedback">{errores.description}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Precio:</label>
          <input
            type="number"
            name="price"
            className={`form-control ${errores.price ? "is-invalid" : ""}`}
            value={producto.price}
            onChange={handleChange}
            min="0"
          />
          {errores.price && (
            <div className="invalid-feedback">{errores.price}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Stock:</label>
          <input
            type="number"
            name="stock"
            className="form-control"
            value={producto.stock}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Imagen URL:</label>
          <input
            type="text"
            name="img"
            className="form-control"
            value={producto.img}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Categoría:</label>
          <input
            type="text"
            name="category"
            className={`form-control ${errores.category ? "is-invalid" : ""}`}
            value={producto.category}
            onChange={handleChange}
          />
          {errores.category && (
            <div className="invalid-feedback">{errores.category}</div>
          )}
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success px-4 fs-5">
            Agregar Producto
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioProducto;
