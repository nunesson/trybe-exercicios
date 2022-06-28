let palavra = "tryber";
let palavraInvertida = "";

for(index = 0; index < palavra.length; index += 1) {
    
    palavraInvertida += palavra[palavra.length - 1 - index];
    console.log(palavraInvertida);
}

console.log(palavraInvertida);