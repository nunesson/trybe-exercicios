let nomes = {
  pessoa1: 'João',
  pessoa2: 'Maria',
  pessoa3: 'Jorge'
};

for (indice in nomes) {
  console.log('Olá ', nomes[indice]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (indice in car) {
  console.log(indice, car[indice]);
}