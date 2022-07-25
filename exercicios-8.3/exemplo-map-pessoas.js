const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = (pessoas) => pessoas.map((person) => `${person.firstName} ${person.lastName}`);


console.log(fullNames(persons)); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]