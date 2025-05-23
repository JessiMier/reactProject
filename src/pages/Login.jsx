import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <h1>Ingresá a tu cuenta</h1>
        <h2 style={{textAlign: "center"}}><Link to="/">Volver</Link></h2>
    </>
  )
}

export default Login