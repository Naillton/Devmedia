import React, { useState } from "react";
import "./State.css"

export default function State(){
  const [ numeroAleatorio, setNumeroAleaorio ] = useState(0);
  function gerarNumero() {
    const newNumber = Math.floor(Math.random() * (100-1) + 1);
    setNumeroAleaorio(newNumber);
  }

  function limparNumero(){
    setNumeroAleaorio(0);
  }
  return(
    <div className="center">
      <h1>Numero Aleatorio:</h1>
      <h1>{ numeroAleatorio }</h1>
      <>
        <h2>Click no botão abaixo para gerar um numero aleatorio</h2>
        <label>
          <button onClick={ gerarNumero } >
            Gerar Numero
          </button>
        </label>
        <label>
          <button onClick={ limparNumero }>
            Limpar Numero
          </button>
        </label>
      </>
    </div>
  )
}