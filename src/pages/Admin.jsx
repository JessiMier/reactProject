import { useContext } from "react";
import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

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
    eliminarProducto,
  } = useContext(AdminContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
    navigate("/");
  };

  return (
    <div className="container py-4">
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-2">Cargando productos...</p>
        </div>
      ) : (
        <>
          <nav className="d-flex justify-content-between align-items-center mb-4">
            <h2>Panel Administrativo</h2>
            <div>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleLogout}
              >
                <i className="fa-solid fa-right-from-bracket me-1"></i> Volver al inicio
              </button>
            </div>
          </nav>

          <div className="d-grid d-md-block mb-3">
            <button
              className="btn btn-success fs-5 w-100 w-md-auto"
              onClick={() => setOpen(true)}
            >
              <i className="fa-solid fa-plus me-2"></i> Agregar producto
            </button>
          </div>

          <div className="row">
            {productos.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card h-100 shadow">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="card-img-top img-fluid"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text fw-bold">${product.price}</p>
                    <div className="mt-auto d-flex flex-column flex-md-row justify-content-center gap-2">
                      <button
                        className="btn btn-primary w-100 w-md-auto"
                        onClick={() => {
                          setOpenEditor(true);
                          setSeleccionado(product);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square me-1"></i>{" "}
                        Editar
                      </button>
                      <button
                        className="btn btn-secondary w-100 w-md-auto"
                        onClick={() => eliminarProducto(product.id)}
                      >
                        <i className="fa-solid fa-trash me-1"></i> Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {open && (
            <div className="mt-5">
              <FormularioProducto onAgregar={agregarProducto} />
            </div>
          )}

          {openEditor && (
            <div className="mt-5">
              <FormularioEdicion
                productoSeleccionado={seleccionado}
                onActualizar={actulizarProducto}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Admin;
