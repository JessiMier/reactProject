import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFound = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-1 text-danger fw-bold">404</h1>
        <h2 className="mb-3">Página no encontrada</h2>
        <p className="text-muted mb-4 fs-4">
          Lo sentimos, la página que estás buscando no existe o fue movida.
        </p>
        <Link to="/" className="btn btn-primary fs-4">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
