const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(array) {
  // escreva seu código aqui
  return array.reduce((acc, curr) => {
    acc.push(...curr)
    return acc
  }, []);
}


// const concatena = (array1, array2) => array1.concat(array2);
// console.log(concatena(['1', '2', '3'], [4, 5, 6] ));

console.log(flatten(arrays));