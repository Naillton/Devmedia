import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const BotaoVoltar = () => (
  <div className="area-botao">
    <button className="btnReturn"><Link className="botao-voltar" to='/'>Voltar</Link></button>
  </div>
);

export default BotaoVoltar;