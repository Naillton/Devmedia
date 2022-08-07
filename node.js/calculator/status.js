function statusIMC(imc) {
  let status;

  if( imc < 18.5) {
    return status = 'Abaixo do peso';
  } else if ( imc >= 18.5 && imc < 25.9) {
    return status = 'Peso Normal';
  } else if ( imc >= 24.9 && imc < 30) {
    return status = 'Acima do peso Normal';
  } else {
    return status = 'Obesidade';
  }
}

exports.statusImc = statusIMC;
