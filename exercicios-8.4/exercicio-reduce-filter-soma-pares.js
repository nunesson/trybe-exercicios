const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pegaPares = (numero) => (numero % 2 === 0);

const somaPares = (acc, numero) => acc + numero;

const somaNumeros = (array) => array.filter(pegaPares).reduce(somaPares);

console.log(somaNumeros(numbers));