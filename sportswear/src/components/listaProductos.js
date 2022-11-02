import { Fragment } from "react";
import { BarraNavegacionClientes } from "./navBar";
import "../styles/listaProductos.css"
import JsonData from "../data/listaProductos.json";


export function ListaProductosClientes() {

    //leyendo archivo json carrito
    const DisplayData = JsonData.map(
        (info) => {
            return (
                <div class="column">
                    <div class="card">
                        <img src={info.imagen} alt='prenda'></img>
                        <p>{info.producto}</p>
                        <p>$ {info.valor}</p>
                        <p>Stock: {info.stock}</p>
                        <button onClick={agregarAlCarrito}>Comprar</button>
                    </div>
                </div>
            )
        }
    )

    return (
        <Fragment>
            <BarraNavegacionClientes />

            <h1>Lista Productos</h1>
            <div class='row'>
                {DisplayData}
            </div>

        </Fragment>
    )
}

function agregarAlCarrito() {
    alert('agregado al carrito')
}