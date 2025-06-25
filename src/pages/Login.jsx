import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { email, setEmail, password, setPassword, handleSubmit, errors, isAuthenticated, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, role, navigate]);

  return (
    <>
      <Header />
      <div className="container mt-5 my-auto">
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
          <div className="mb-3">
            <label htmlFor="formBasicEmail" className="form-label fw-bold fs-4">
              Correo Electrónico
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""} p-2 fs-5`}
              id="formBasicEmail"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="formBasicPassword" className="form-label fw-bold fs-4">
              Contraseña
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""} p-2 fs-5`}
              id="formBasicPassword"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100 fs-5">
            Iniciar sesión
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;

