import { Fragment } from "react";
import { BarraNavegacionAdmin } from "./navBar";
import "../styles/crearProducto.css"




export function CrearProductosAdmin() {
    return (
        <Fragment>
            <BarraNavegacionAdmin />

            <h1>Crear Productos</h1>
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