import './App.css';
import { Route, Routes } from "react-router-dom";
import { Bienvenida } from "./components/bienvenida";
import { CrearProductosAdmin } from "./components/adminCrearProductos";
import { ListaProductosAdmin } from "./components/adminListaProductos";
import { ModificarProductosAdmin } from "./components/adminModificarProductos";
import { ListaVentasAdmin } from "./components/adminListaVentas";
import { ListaUsuariosAdmin } from "./components/adminListaUsuarios";
import { CrearUsuariosAdmin } from "./components/adminCrearUsuarios";
import { ListaProductosClientes } from './components/listaProductos';
import { Carrito } from './components/carrito';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Bienvenida/>}/>    
        <Route path="/ListaProductosAdmin" element={<ListaProductosAdmin />} />
        <Route path="/CrearProductosAdmin" element={<CrearProductosAdmin />} />
        <Route path="/ModificarProductosAdmin" element={<ModificarProductosAdmin />} />
        <Route path="/ListaVentasAdmin" element={<ListaVentasAdmin />} />
        <Route path="/ListaUsuariosAdmin" element={<ListaUsuariosAdmin />} />
        <Route path="/CrearUsuariosAdmin" element={<CrearUsuariosAdmin />} />
        <Route path="/ListaProductosClientes" element={<ListaProductosClientes />} />
        <Route path="/Carrito" element={<Carrito />} />
      
    </Routes>
    )
}

export default App;
