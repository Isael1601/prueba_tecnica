import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import Clientes from "./components/Clientes/Clientes";
import Tienda from "./components/Tienda/Tienda";
import Productos from "./components/Productos/Productos";
import Carrito from "./components/Carrito/Carrito";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='Inicio' element={<Inicio />} />
          <Route path='Clientes' element={<Clientes />} />
          <Route path='Tienda' element={<Tienda />} />
          <Route path='Productos' element={<Productos />} />
          <Route path='Carrito' element={<Carrito />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
