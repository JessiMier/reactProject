import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuth] = useState(
    localStorage.getItem("isAuth") === "true"
  );
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  useEffect(() => {
    fetch("https://683f2c011cd60dca33de8590.mockapi.io/api/v1/products")
      .then(respuesta => respuesta.json())
            .then(datos => {
                setTimeout(() => {
                    setProductos(datos)
                    setCargando(false)
                }, 2000)
            })
            .catch(error => {
                console.log('Error', error)
                setCargando(false)
                setError(true)
            })
  }, []);

  const productosFiltrados = productos.filter((producto)=> producto?.name.toLowerCase().includes(busqueda.toLowerCase()))


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
    <CartContext.Provider
      value={{
        cart,
        productos,
        cargando,
        error,
        isAuthenticated,
        setIsAuth,
        handleAddToCart,
        handleDeleteFromCart,
        productosFiltrados,
        busqueda,
        setBusqueda,
        categoriaSeleccionada,
        setCategoriaSeleccionada,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
