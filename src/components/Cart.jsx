import React from "react";
import "./styleCart.css";

const Cart = ({ cartItems, isOpen, onClose, borrarProducto }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );
  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2 style={{ color: "black", textAlign: "center" }}>
          Carrito de compras
        </h2>
        <button onClick={onClose} className="close-button">
          X
        </button>
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p style={{ textAlign: "center", color: "red" }}>
            El Carrito esta vacío
          </p>
        ) : (
          <>
            <ul className="cart-item">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  style={{
                    color: "black",
                    borderBottom: "1px solid black",
                    padding: "10px",
                  }}
                >
                  {item.name} - ${item.price} x {item.quantity} = $
                  {(Number(item.price) * Number(item.quantity)).toFixed(2)}
                  <button
                    style={{ marginLeft: "5px" }}
                    onClick={() => borrarProducto(item)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </li>
              ))}
            </ul>
            <h3 style={{ textAlign: "right", marginRight: "10px", color: "black" }}>
              Total: ${total.toFixed(2)}
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
