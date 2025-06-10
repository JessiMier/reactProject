import { useState } from "react";

function FormularioProducto({ onAgregar }) {
  const [producto, setProducto] = useState({
    name: "",
    price: "",
    stock: "",
    img: "",
    category: "",
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
    if (!producto.price || producto.price <= 0) {
      nuevosErrores.price = "El precio debe ser mayor a 0.";
    }
    if (!producto.category.trim() || producto.category.length < 5) {
      nuevosErrores.category = "La categoría debe tener al menos 5 caracteres.";
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) {
      return;
    }
    onAgregar(producto);
    setProducto({
      name: "",
      price: "",
      stock: "",
      img: "",
      category: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>

      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={producto.name}
          onChange={handleChange}
          required
        />
        {errores.name && <p style={{ color: "red" }}>{errores.name}</p>}
      </div>

      <div className="form-group">
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          value={producto.price}
          onChange={handleChange}
          required
          min="0"
        />
        {errores.price && <p style={{ color: "red" }}>{errores.price}</p>}
      </div>

      <div className="form-group">
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={producto.stock}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Imagen URL:</label>
        <input
          type="text"
          name="img"
          value={producto.img}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Categoría:</label>
        <input
          type="text"
          name="category"
          value={producto.category || ''}
          onChange={handleChange}
          required
        />
        {errores.category && <p style={{ color: "red" }}>{errores.category}</p>}
      </div>

      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default FormularioProducto;
