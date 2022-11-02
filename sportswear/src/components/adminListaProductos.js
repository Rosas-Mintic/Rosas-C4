import { Fragment } from "react";
import { BarraNavegacionAdmin } from "./navBar";
import "../styles/listaProductos.css"
import JsonData from "../data/listaProductos.json";
import { Link } from "react-router-dom";

export function ListaProductosAdmin() {

    //leyendo archivo json listaProductos
    const DisplayData = JsonData.map(
        (info) => {
            return (
                <div class="column">
                    <div class="card">
                        <img src={info.imagen}></img>
                        <p>{info.producto}</p>
                        <p>$ {info.valor}</p>
                        <p>Stock: {info.stock}</p>
                        <Link to="/ModificarProductosAdmin" >Modificar</Link>
                    </div>
                </div>
            )
        }
    )


    return (
        <Fragment>
            <BarraNavegacionAdmin />

            <h1>Lista Productos</h1>
            <div class='row'>
                {DisplayData}
            </div>
        </Fragment>
    )
}