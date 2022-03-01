import React from "react";
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import './estilo.css';

export default function ListaDeSignos() {
  return (
    <div>
      <Titulo />

      <div className="lista">
        <ItemLista />
      </div>
    </div>
  )
}