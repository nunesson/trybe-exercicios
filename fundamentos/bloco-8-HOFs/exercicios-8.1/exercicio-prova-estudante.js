const respCorretas = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respEstudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaNotas = (corretas, estudante) => {
  if (corretas === estudante) {
    return 1;
  }
  if (estudante === 'N.A') {
    return 0;
  }
  return -0.5;
}

const pontos = (respostasCorretas, respostasEstudante, compara) => { //Essa é a HOF
  let contador = 0;
  for(let index = 0; index < respostasCorretas.length; index += 1) {
    const retorno = compara(respostasCorretas[index], respostasEstudante[index]);
    contador += retorno;
  }
  return `Resultado final: ${contador} pontos`
}

console.log(pontos(respCorretas, respEstudante, comparaNotas));