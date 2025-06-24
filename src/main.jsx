import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AdminProvider } from "./context/AdminContext.jsx";
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <AdminProvider>
        <AuthProvider>
          <App />
          <ToastContainer />
        </AuthProvider>
        </AdminProvider>
      </CartProvider>
    </Router>
  </StrictMode>
);
