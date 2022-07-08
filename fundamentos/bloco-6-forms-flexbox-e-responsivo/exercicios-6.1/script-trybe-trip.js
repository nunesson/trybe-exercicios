// const button = document.getElementById('button');
// const checkImage = document.getElementById('concordo');

// function preventDefault(event) {
//   event.preventDefault();
// }

// if (checkImage)
// button.addEventListener('click', preventDefault);

let validaNome = document.querySelector('#nomeCompleto');
let validaEmail = document.querySelector('#inputEmail');

console.log(validaNome.value);

function validaDados () {
  if (validaNome === '') {
    alert('Preencha corretamente!');
  }
return false;
}

let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  if (document.getElementById('concordo').checked === false) {
    event.preventDefault();
    console.log('Não envia');
  }
  console.log(event);
})