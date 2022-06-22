let peca = "BisPo";

// let pecaCorrigida = peca.toLowerCase();

// console.log(pecaCorrigida);

switch (peca.toLowerCase()) {
    case "rei":
        console.log("Qualquer direção, uma casa por vez");
        break;

    case "rainha":
        console.log("Qualquer direção");
        break;

    case "bispo":
        console.log("Diagonais");
        break;

    case "cavalo":
        console.log("Anda em L, pode saltar peças");
        break;

    case "peao":
        console.log("Linha reta, uma casa por vez, não pode retroceder, captura em diagonal");
        break;

    default:
        console.log("Peça inválida")
}
if (condicao) {
    
}