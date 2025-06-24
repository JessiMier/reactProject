import { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/estaticos/Footer";
import Header from "../components/estaticos/Header";
import { CartContext } from "../context/CartContext";

const AcercaDe = () => {
  const { cart, handleDeleteFromCart } = useContext(CartContext);

  return (
    <>
      <Header borrarProducto={handleDeleteFromCart} cartItems={cart} />

      <main className="container">
        <h1 className="text-center mb-4 fw-bold titulo-principal">
          Sobre Nosotros
        </h1>

        <div className="text-center mb-5">
          <p className="fs-3">
            En <strong className="text-primary">Urbaniza</strong>, creemos que
            la moda urbana es más que estilo: es una actitud. Nacimos con la
            idea de vestir a personas auténticas, que buscan comodidad,
            personalidad y libertad de expresión.
          </p>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src="/images/modaUrbana1.jpg"
              alt="Moda urbana"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 text-center">
            <h3 className="text-primary fw-semibold">Nuestra historia</h3>
            <p className="fs-4">
              Urbaniza nació en 2021 como un pequeño proyecto independiente en
              Buenos Aires. Hoy somos una comunidad que ama el arte callejero,
              la cultura skate, el diseño y la música. Cada prenda está pensada
              para que te sientas vos mismo.
            </p>
          </div>
        </div>

        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src="/images/modaUrbana2.jpg"
              alt="Equipo Urbaniza"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 text-center">
            <h3 className="text-primary fw-semibold">Lo que creemos</h3>
            <p className="fs-4">
              Nos importa la sustentabilidad, los procesos justos y apoyar lo
              local. Nuestra meta es que cada persona que elige Urbaniza se
              sienta parte de algo más grande.
            </p>
          </div>
        </div>

        <div className="text-center my-5">
          <Link to="/" className="btn btn-primary btn-lg px-4">
            Ir a la tienda
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AcercaDe;
