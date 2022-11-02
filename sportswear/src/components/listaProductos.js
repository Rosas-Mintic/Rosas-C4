import { Fragment } from "react";
import { BarraNavegacionClientes } from "./navBar";



export function ListaProductosClientes(){
    return(
        <Fragment>
            <BarraNavegacionClientes />
            
            <h1>Lista Productos</h1>
        </Fragment>
    )
}