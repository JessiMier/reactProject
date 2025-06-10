import {useContext } from "react";
import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const Admin = () => {
  const { setIsAuth } = useContext(CartContext);
  const {
    productos,
    loading,
    open,
    setOpen,
    seleccionado,
    setSeleccionado,
    openEditor,
    setOpenEditor,
    agregarProducto,
    actulizarProducto,
    eliminarProducto
  } = useContext(AdminContext)

  const navigate = useNavigate();

  

  return (
    <div className="container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <nav>
            <ul className="nav">
              <li className="navItem">
                <button
                  className="navButton"
                  onClick={() => {
                    setIsAuth(false);
                    navigate("/");
                    localStorage.removeItem("isAuth");
                  }}
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              </li>
              <li className="navItem">
                <a href="/admin">Admin</a>
              </li>
            </ul>
          </nav>
          <h1 className="title">Panel Administrativo</h1>

          <ul className="list">
            {productos.map((product) => (
              <li key={product.id} className="listItem">
                <img
                  src={product.img}
                  alt={product.name}
                  className="listItemImage"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    margin: "10px",
                  }}
                />
                <span>{product.name}</span>
                <span>${product.price}</span>
                <div>
                  <button
                    className="editButton"
                    onClick={() => {
                      setOpenEditor(true);
                      setSeleccionado(product);
                    }}
                  >
                    Editar
                  </button>

                  <button
                    className="deleteButton"
                    onClick={() => eliminarProducto(product.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      <button onClick={() => setOpen(true)}>Agregar producto nuevo</button>
      {open && <FormularioProducto onAgregar={agregarProducto} />}
      {openEditor && (
        <FormularioEdicion
          productoSeleccionado={seleccionado}
          onActualizar={actulizarProducto}
        />
      )}
    </div>
  );
};

export default Admin;
