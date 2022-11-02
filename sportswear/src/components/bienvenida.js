import { Fragment } from "react";
import { Link } from "react-router-dom";



export function Bienvenida() {
    return (

        <Fragment>
            
            <div>
                <Link to="/ListaProductosAdmin" >Administrador </Link>
                <br></br>
                <Link to="/ListaProductosClientes" >Clientes</Link>

            </div>
            
        </Fragment>
        

    )
}