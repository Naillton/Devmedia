let mensagemDoDia = require('./mensagemDoDia');
const express = require('express');
const app = express();

const PORT = 3000;
let data = new Date();

app.get('/', (req, res) => {
  let dia = data.getDate();
  let frase = mensagemDoDia.fraseDoDia(dia);

  res.status(200).json({ message: frase });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

