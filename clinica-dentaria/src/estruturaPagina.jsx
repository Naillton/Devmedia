import React from "react";

import Topo from "./componentes/Topo";
import Rodape from "./componentes/Rodape";

const EstruturaPagina = (props) => {
  return(
    <section>
      <Topo />
      {props.children}
      <Rodape />
    </section>
  );
}

export default EstruturaPagina;
