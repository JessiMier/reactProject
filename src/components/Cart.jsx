import { useContext } from "react";
import "./styleCart.css";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const Cart = ({ isOpen, onClose }) => {
  const { cart, handleDeleteFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  const finalizarCompra = () => {
    Swal.fire({
      title: "¡Gracias por tu compra!",
      text: "Te enviaremos un correo con los detalles.",
      icon: "success",
      confirmButtonText: "Cerrar",
    });
    clearCart();
    onClose();
  };

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Carrito de compras</h2>
        <button onClick={onClose} className="close-button">
          X
        </button>
      </div>

      <div className="cart-content">
        {cart.length === 0 ? (
          <p className="cart-empty">El Carrito está vacío</p>
        ) : (
          <>
            <ul className="cart-item">
              {cart.map((item) => (
                <li key={item.id} className="cart-item-detail">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">
                      ${item.price} x {item.quantity} ={" "}
                      <strong>
                        ${(item.price * item.quantity).toFixed(2)}
                      </strong>
                    </p>
                  </div>
                  <button onClick={() => handleDeleteFromCart(item)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </li>
              ))}
            </ul>
            <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>

            <div className="d-flex justify-content-between mt-3">
              <button
                className="btn btn-outline-danger w-50 me-2"
                onClick={clearCart}
              >
                Vaciar carrito
              </button>
              <button
                className="btn btn-success w-50"
                onClick={finalizarCompra}
              >
                Finalizar compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
