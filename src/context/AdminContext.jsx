import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);
  const [openEditor, setOpenEditor] = useState(false);
  const apiUrl = "https://683f2c011cd60dca33de8590.mockapi.io/api/v1/products";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
        Swal.fire("Error", "No se pudieron cargar los productos", "error");
      });
  }, []);

  const cargarProductos = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.log("Error al cargar productos ", error);
    }
  };

  const agregarProducto = async (producto) => {
    try {
      producto.price = parseFloat(producto.price).toFixed(2);

      const respuesta = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });

      if (!respuesta.ok) {
        throw new Error("Error al agregar producto");
      }

      await respuesta.json();
      await cargarProductos();
      setOpen(false);
      Swal.fire("Éxito", "Producto agregado correctamente", "success");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  const actulizarProducto = async (producto) => {
    if (!producto.id) {
      Swal.fire("Error", "El producto no tiene un ID válido", "error");
      return;
    }

    try {
      producto.price = parseFloat(producto.price).toFixed(2);

      const respuesta = await fetch(`${apiUrl}/${producto.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });

      if (!respuesta.ok) throw Error("Error al actualizar el producto");

      await respuesta.json();
      setOpenEditor(false);
      setSeleccionado(null);
      await cargarProductos();
      Swal.fire("Actualizado", "Producto actualizado correctamente", "success");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  const eliminarProducto = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "¿Eliminar producto?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (isConfirmed) {
      try {
        const respuesta = await fetch(`${apiUrl}/${id}`, {
          method: "DELETE",
        });

        if (!respuesta.ok) throw Error("Error al eliminar");

        await cargarProductos();
        Swal.fire("Eliminado", "Producto eliminado correctamente", "success");
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al eliminar el producto", "error");
      }
    }
  };

  return (
    <AdminContext.Provider
      value={{
        productos,
        loading,
        open,
        setOpen,
        openEditor,
        setOpenEditor,
        seleccionado,
        setSeleccionado,
        agregarProducto,
        actulizarProducto,
        eliminarProducto,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
