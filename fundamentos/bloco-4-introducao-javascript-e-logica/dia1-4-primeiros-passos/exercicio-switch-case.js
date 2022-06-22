let estado;
let nota = 81;

switch (nota) {
    case nota >= 80:
        console.log("Aprovada");
        break;
    
    case nota > 60:
        console.log("lista")
        break;

    case nota < 60:
        console.log("reprovada")
        break;

    default:
        console.log("Não se aplica")
}