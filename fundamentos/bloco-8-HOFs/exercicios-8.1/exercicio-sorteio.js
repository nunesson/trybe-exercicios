const sorteio = (min, max) => Math.round(Math.random() * (max - min) + min);

// console.log(sorteio(1, 5));

const ganhaPerde = (resultado) => {
  // let frase = '';
  const num = resultado(1, 5);
  console.log(num);
  if (num === 3) {
    return 'Parabéns, você ganhou!';
    
  }
  return 'Tente novamente!';
}

console.log(ganhaPerde(sorteio));