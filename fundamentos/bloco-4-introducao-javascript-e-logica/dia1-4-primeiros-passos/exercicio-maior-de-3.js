const num1 = 39;
const num2 = 39;
const num3 = 39;

if (num1 > num2 && num1 > num3) {
    console.log("O número maior é o 1");
}
else if (num2 > num1 && num2 > num3) {
    console.log("O número maior é o 2");
}
else if (num3 > num1 && num3 > num2) {
    console.log("O número maior é o 3")
}
else {
    console.log ("Os números são iguais")
}