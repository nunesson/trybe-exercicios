let listaDePessoasAprovadas = [
  'nunesson@gmail.com',
  'anfotoevideo@gmail.com',
  'quatroovos@gmail.com'
];

const enviarEmail = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso!`);
};

listaDePessoasAprovadas.forEach((item, posicao, array) => {
  enviarEmail(item);
  console.log(`Sua posição é ${posicao}`);
  console.log(`A quantidade é ${array.length}`);
})