const express = require('express');
const { calcIMC } = require('./calculatorIMC');
const statusIMC = require('./status');
const app = express();

app.use(express.json());
const PORT = 8080;

app.post('/', (req, res) => {
  const { peso, altura } = req.body;
  let imc = calcIMC(peso, altura).toFixed(2);
  let status = statusIMC.statusImc(imc);
  if (isNaN(imc)) {
    return res.status(400).json({ imc: "o valor tem que ser um numero"});
  }
  return res.status(200).json({ 
    imc,
    status
  });
});

app.listen(PORT, () => console.log(`Aplication run in port ${PORT} `));