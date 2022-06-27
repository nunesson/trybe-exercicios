 let pizzas = {
  sabor: "Palmito",
  preco: 39.9,
  bordaCatupiry: true
 };

 for (let chave in pizzas) {
  console.log(pizzas[chave]);
 }

 let pizzasDoces = ['chocolate', 'banana', 'morango'];

 for (let chave in pizzasDoces) {
  console.log(chave, pizzasDoces[chave]);
 }