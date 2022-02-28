import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaInicial from "../PaginaInicial";
import Backend from "../PaginaBackEnd";
import Frontend from "../PaginaFrontEnd";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route extract path="/" element={ <PaginaInicial /> }/>
      <Route extract path="/back-end" element={ <Backend /> }/>
      <Route extract path="/front-end" element={ <Frontend /> }/>
    </Routes>    
  </BrowserRouter>
);

export default Rotas;

