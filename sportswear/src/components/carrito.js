import JsonData from "../data/carrito.json";
import '../styles/carrito.css';
import { Fragment } from "react";
import { BarraNavegacionClientes } from "./navBar";

export function Carrito() {
    //leyendo archivo json carrito
    const DisplayData = JsonData.map(
        (info) => {
            return (
                <tr>
                    <td><img src={info.imagen}></img></td>
                    <td>{info.cantidad}</td>
                    <td>{info.producto}</td>
                    <td>$ {info.valor}</td>
                    <td class="total">$ {info.total}</td>
                </tr>
            )
        }
    )
/*
    var datos= DisplayData
    datos.forEach((item, index, arr) => {console.log(item)
        
    });
    
*/
    return (
        <Fragment>
            
            <BarraNavegacionClientes />
            <div class="container">
                <h1>Carrito de compras</h1>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Cantidad</th>
                                <th>Producto</th>
                                <th>Valor</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>

                            {DisplayData}

                        </tbody>
                    </table>
                </div>
                <div>
                    <button>Finalizar compra</button>
                    <button>Cancelar</button>
                </div>
            </div>

        </Fragment>
    )

}


