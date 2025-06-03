import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./styleEstaticos.css";
import Cart from "../Cart.jsx";
import { AppContext } from "../../context/AppContext"; 

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, handleDeleteFromCart } = useContext(AppContext);

  const totalCantidad = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">Inicio</Link>
          </li>
          <li>
            <Link to="/acercade" className="link">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/productos" className="link">Galeria de Productos</Link>
          </li>
          <li>
            <Link to="/contacto" className="link">Contacto</Link>
          </li>
          <li>
            <Link to="/login" className="link">Tu Cuenta</Link>
          </li>
          <li className="cartnave" style={{ position: "relative" }}>
            <button className="btnCart" onClick={() => setIsCartOpen(true)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            {totalCantidad > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  transform: "translate(50%, -50%)",
                }}
              >
                {totalCantidad}
              </span>
            )}
            <Cart
              cartItems={cart}
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              borrarProducto={handleDeleteFromCart}
            />
          </li>
        </ul>
      </nav>
      <div>
        <img src="/images/logo2.png" alt="logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;

