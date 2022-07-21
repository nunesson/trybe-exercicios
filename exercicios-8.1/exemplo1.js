const sayHello = () => { // Variável sayHello armazena função
  return ('hello trybers');
}

const printGreeting = (callback) => { // Variável printGreeting armazena função que tem callback como parâmetro
    console.log(callback());
}

printGreeting(sayHello); // Pega o retorno da função sayHello e joga no parâmetro callback