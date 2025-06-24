import { useState, useContext, useEffect } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const Contactos = () => {
  const { cart, handleDeleteFromCart } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    const datosGuardados = localStorage.getItem("contactos");
    if (datosGuardados) {
      setContactos(JSON.parse(datosGuardados));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoContacto = { nombre, email, contrasena };
    const nuevosContactos = [...contactos, nuevoContacto];
    setContactos(nuevosContactos);
    localStorage.setItem("contactos", JSON.stringify(nuevosContactos));
    setNombre("");
    setEmail("");
    setContrasena("");

    Swal.fire({
      title: "¡Registro exitoso",
      text: "Gracias por registrarte.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  return (
    <>
      <Header borrarProducto={handleDeleteFromCart} cartItems={cart} />
      <main className="container">
        <h1 className="mb-4 titulo-principal">Registrate</h1>
        <form
          onSubmit={handleSubmit}
          className="mb-4 mx-auto"
          style={{
            maxWidth: "600px",
          }}
        >
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label fs-4 fw-bold">
              Nombre
            </label>
            <input
              type="text"
              className="form-control fs-5"
              placeholder="Ingrese su nombre"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fs-4 fw-bold">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control fs-5"
              placeholder="Ingrese una contraseña"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label fs-4 fw-bold">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control fs-5"
              placeholder="Ingrese su correo contraseña"
              id="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary container fs-4">
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contactos;
