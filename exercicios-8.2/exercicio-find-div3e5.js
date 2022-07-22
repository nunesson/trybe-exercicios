const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((divisivel) => divisivel % 3 === 0 && divisivel %5 === 0);

console.log(findDivisibleBy3And5);