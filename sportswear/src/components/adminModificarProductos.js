import { Fragment } from "react";
import { BarraNavegacionAdmin } from "./navBar";
import JsonData from "../data/listaProductos.json";
import "../styles/crearProducto.css"

export function ModificarProductosAdmin() {
    //leyendo archivo json listaProductos
    const DisplayData = JsonData.map(
        (info) => {
            return (
                <option value={info.producto}>{info.producto}</option>

            )
        }
    )

    return (
        <Fragment>
            <BarraNavegacionAdmin />

            <h1>Modificar Productos</h1>

            <div class="container">
                <label for="Articulo">Articulo: </label>
                <select id="country" name="country">
                    {DisplayData}
                </select>
            </div>



            <div>
                <form action="/ListaProductosAdmin">
                    <div class="container">
                        <label for="nombre">Nombre: </label>
                        <input type="text" id="nombre" name="nombre" ></input>

                        <label for="urlimagen">Url imagen: </label>
                        <input type="text" id="urlimagen" name="urlimagen" ></input>

                        <label for="precio">Precio: $</label>
                        <input type="number" id="precio" name="precio" ></input>


                        <label for="stock">Stock: </label>
                        <input type="number" id="stock" name="stock" ></input>

                        <button onClick={crear}> Guardar</button>
                    </div>

                </form>
            </div>




        </Fragment>

    )
}

function crear() {
    alert('Producto creado')
}