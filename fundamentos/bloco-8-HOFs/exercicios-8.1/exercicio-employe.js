const nomeEmail = (nome) => {
  const geraEmail = nome.toLowerCase().split(' ').join('_');
  return {nome, email: `${geraEmail}@betrybe.com`};
}; 

const newEmployees = (nomeEmail) => {
  const employees = {
    id1: nomeEmail('Pedro Guerra'),
    id2: nomeEmail('Luiza Drummond'),
    id3: nomeEmail('Carla Paiva'),
  };
  return employees;
}



console.log(newEmployees(nomeEmail));