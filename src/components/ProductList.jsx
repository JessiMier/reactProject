import React, { useContext } from 'react';
import Productos from './Productos';
import './styleProductos.css';
import { AppContext } from '../context/AppContext'; 

const ProductList = () => {
  const { productos, handleAddToCart } = useContext(AppContext);

  return (
    <div className="product-list">
      {productos.map((producto) => (
        <div className="product-item" key={producto.id}>
          <Productos 
            producto={producto} 
            agregarCarrito={handleAddToCart} 
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
