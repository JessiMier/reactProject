import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuth] = useState(false);

  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
          setCargando(false);
        }, 2000);
      })
      .catch((error) => {
        console.log("Error", error);
        setCargando(false);
        setError(true);
      });
  }, []);

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  const handleDeleteFromCart = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null
            : item
        )
        .filter((item) => item !== null)
    );
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        productos,
        cargando,
        error,
        isAuthenticated,
        setIsAuth,
        handleAddToCart,
        handleDeleteFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};