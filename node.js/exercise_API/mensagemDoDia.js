let dados = require('./phrases');

function fraseDoDia(dia) {
  const [array] = dados.frases.filter((days, indice) => {
    if (indice + 1 === dia) {
      return days;
    }
  });
  return array;
}

exports.fraseDoDia = fraseDoDia;