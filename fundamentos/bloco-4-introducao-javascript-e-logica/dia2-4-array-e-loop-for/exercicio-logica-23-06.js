let numero = [32, 0, 30, 40, 50];
let valor = 56;
let resultado = 0;
let mensagem = "";


for (let x = 0; x < numero.length; x += 1) {
  // console.log(numero[x]);
  if (numero.indexOf(valor) >= 0) {
    resultado = numero.indexOf(valor);
  } else {
    resultado = "";
    mensagem = "Elemento não encontrado no array";
  }
}

console.log(resultado);
console.log(mensagem);