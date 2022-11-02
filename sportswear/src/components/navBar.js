import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"


export function BarraNavegacionAdmin() {
  return (

    <Fragment>
      <div class="topnav">
        <Link to="/" >Home</Link>
        <Link to="/ListaProductosAdmin" >Productos</Link>
        <Link to="/CrearProductosAdmin" >Crear Productos </Link>
        <Link to="/ModificarProductosAdmin" >Modificar Productos</Link>
        <Link to="/ListaVentasAdmin" >Ventas</Link>
        <Link to="/ListaUsuariosAdmin" >Usuarios</Link>
        <Link to="/CrearUsuariosAdmin" >Crear Usuarios</Link>
      </div>


    </Fragment>

  )
}

export function BarraNavegacionClientes() {
  return (

    <Fragment>
      <div class="topnav">
        <Link to="/" >Home</Link>
        <Link to="/ListaProductosClientes" >Productos</Link>
        <Link to="/Carrito" >Carrito</Link>
      </div>


    </Fragment>

  )
}
