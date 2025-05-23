import React from 'react'
import Productos from './Productos'
import './styleProductos.css'




const ProductList = ({productos, agregarCarrito}) => {
  return (
    <div className="product-list">
      {productos.map(producto => (
        <div className="product-item" key={producto.id}>
          <Productos 
            producto={producto} 
            agregarCarrito={agregarCarrito} 
          />
        </div>
      ))}
    </div>
  )
}

export default ProductList