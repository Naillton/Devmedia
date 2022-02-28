import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const PaginaInicial = () => (
  <div>
    <h1>Escolha seu caminha em JavaScript</h1>
    <div className="conteudo-opcoes">
      <button className="btnConteudo"><Link className="opcao-front-end" to='/front-end'>Front-end</Link></button>
      <button className="btnConteudo"> <Link className="opcao-back-end" to='/back-end'>Back-end</Link></button>
    </div>
  </div>
);

export default PaginaInicial;
