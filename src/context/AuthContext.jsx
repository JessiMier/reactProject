import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuth") === "true";
    const storedRole = localStorage.getItem("role") || "";

    if (storedAuth) {
      setIsAuthenticated(true);
      setRole(storedRole);
      if (storedRole === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    let validationErrors = {};
    if (!email) validationErrors.email = "Email es requerido";
    if (!password) validationErrors.password = "Password es requerido";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Completa los campos obligatorios", {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }

    try {
      const res = await fetch("/data/users.json");
      if (!res.ok) throw new Error("No se pudo cargar el archivo de usuarios");
      const users = await res.json();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        setErrors({ email: "Credenciales inválidas" });
      } else {
        setIsAuthenticated(true);
        setRole(foundUser.role);
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("role", foundUser.role);

        toast.success("¡Inicio de sesión exitoso!", {
          position: "top-center",
          autoClose: 1000,
        });

        if (foundUser.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setErrors({
        email: "Algo salió mal. Por favor, inténtalo de nuevo más tarde.",
      });
      toast.error("Error en el servidor", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
    setRole("");
    setEmail("");
    setPassword("");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("role");
    toast.info("Sesión cerrada", { position: "top-center", autoClose: 1000 });
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        errors,
        role,
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
