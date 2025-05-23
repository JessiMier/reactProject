import { useState } from "react";
import { Link } from "react-router-dom";
import "./styleEstaticos.css";
import Cart from "../Cart.jsx";

const Header = ({ cartItems, borrarProducto }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalCantidad = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/acercade" className="link">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="/productos" className="link">
              Galeria de Productos
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="link">
              Contacto
            </Link>
          </li>
           <li>
            <Link to="/login" className="link">
              Tu Cuenta
            </Link>
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
              cartItems={cartItems}
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              borrarProducto={borrarProducto}
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
