import React from "react";
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import arrayObj from "../arrayObj";
import './estilo.css';

export default function ListaDeSignos() {
  return (
    <div>
      <Titulo />
      <div className="lista">
        { arrayObj.map((card) => <ItemLista 
          signo={ card.signo } 
          imagem={ card.imagem }
          dataInicio={ card.dataInicio }
          dataFim={ card.dataFim }
          key={ card.signo }
        />)}
      </div>
    </div>
  )
}