function calcIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
};

exports.calcIMC = calcIMC;