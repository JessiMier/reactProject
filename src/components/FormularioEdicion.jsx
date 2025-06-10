import React, { useState, useEffect } from "react";

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onActualizar(producto);
      }}
    >
      <h2>Editar Producto</h2>
       
       <div className="form-group">
        <label>ID:</label>
        <input type="text" value={producto.id || ""} readOnly />
      </div> 

      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={producto.name || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          value={producto.price || ""}
          onChange={handleChange}
          required
          min="0"
        />
      </div>

      <div className="form-group">
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={producto.stock || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Imagen URL:</label>
        <input
          type="text"
          name="img"
          value={producto.img || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Categoría:</label>
        <input
          type="text"
          name="category"
          value={producto.category || ""}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Actualizar Producto</button>
    </form>
  );
}

export default FormularioEdicion;
