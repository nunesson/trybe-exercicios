const sum = (...parametros) => {
  return parametros.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(2, 4, 4, 2));