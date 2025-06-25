import React from "react";
import { useNavigate } from "react-router-dom";

const Denegado = () => {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="alert alert-danger text-center shadow p-5 rounded">
        <h2 className="mb-3">
          <i className="bi bi-exclamation-triangle-fill"></i> Acceso denegado
        </h2>
        <p className="mb-4 fs-5">
          No tenés permisos para acceder a esta página.
        </p>
        <button
          className="btn btn-danger fs-5"
          onClick={() => navigate("/")}
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Denegado;

