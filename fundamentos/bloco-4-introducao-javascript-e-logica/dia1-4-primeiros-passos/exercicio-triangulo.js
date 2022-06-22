const angulo1 = 45;
const angulo2 = 45;
const angulo3 = 90;

let somaAngulos = angulo1 + angulo2 + angulo3;

let angulosValidos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(angulosValidos) {
    if (somaAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Ângulos inválidos")
}