import { Fragment } from "react";
import { BarraNavegacionAdmin } from "./navBar";
import JsonData from "../data/ventas.json"
import "../styles/ventas.css"


export function ListaVentasAdmin() {
    //leyendo archivo json carrito
    const DisplayData = JsonData.map(
        (info) => {
            return (
                <tr>
                    <td>{info.fecha}</td>
                    <td>{info.idVenta}</td>
                    <td>$ {info.valor}</td>
                </tr>
            )
        }
    )

    const valores = JsonData
    var sum = 0
    valores.forEach((item, index, arr) => { sum += item.valor });
    var total = "$ "+ sum

    return (
        <Fragment>
            <BarraNavegacionAdmin />

            <h1>Lista Ventas</h1>

            <div class="container">

                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>id Venta</th>
                            <th>Valor</th>

                        </tr>
                    </thead>
                    <tbody>

                        {DisplayData}
                        <tr>
                            <td></td>
                            <td class="negrita">Total</td>
                            <td>{total}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </Fragment>
    )
}