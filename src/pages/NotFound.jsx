import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>404 -NotFound</h1>
        <button><Link to='/'>Volver al inicio</Link></button>
    </div>
  )
}

export default NotFound