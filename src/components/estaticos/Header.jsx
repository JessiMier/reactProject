import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./styleEstaticos.css";
import Cart from "../Cart.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import { useAuth } from "../../context/AuthContext.jsx";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, handleDeleteFromCart } = useContext(CartContext);
  const { isAuthenticated, logout, role } = useAuth();  
  const navigate = useNavigate();

  const totalCantidad = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="link">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/acercade" className="link">
              Sobre Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos" className="link">
              Galeria de Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className="link">
              Registrate
            </NavLink>
          </li>

          {isAuthenticated && role === "admin" && (
            <li>
              <button
                className="btn btn-secondary fs-5"
                onClick={() => navigate("/admin")}
              >
                Panel Admin
              </button>
            </li>
          )}

          {!isAuthenticated && (
            <li>
              <NavLink to="/login" className="btn btn-secondary fs-5">
                Iniciar sesión
              </NavLink>
            </li>
          )}

          {isAuthenticated && (
            <li>
              <button onClick={logout} className="btn btn-secondary fs-5">
                Cerrar sesión
              </button>
            </li>
          )}

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
        <img src="/images/logo2.png" alt="logo" className="logo mb-3" />
      </div>
    </header>
  );
};

export default Header;

