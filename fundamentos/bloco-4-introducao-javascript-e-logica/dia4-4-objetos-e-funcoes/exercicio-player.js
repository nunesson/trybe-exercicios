let nome = 'Marta';
let sobrenome = 'Silva';
let idade = 34;
let medalhas = { ouro: 2, prata: 3, melhorDoMundo: [2006, 2007, 2008, 2009, 2010, 2018] };

console.log('A jogadora ' + nome + ' ' + sobrenome + ' tem ' + idade + ' anos de idade');

console.log('A jogadora ' + nome + ' ' + sobrenome + ' foi eleita a melhor do mundo por ' + medalhas.melhorDoMundo.length + ' vezes');

console.log('A jogadora possui ' + medalhas.ouro + ' medalhas de ouro e ' + medalhas.prata + ' medalhas de prata.');