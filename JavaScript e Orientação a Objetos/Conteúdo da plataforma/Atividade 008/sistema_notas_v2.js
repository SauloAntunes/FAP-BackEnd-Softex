/*
Crie dois códigos de sistema de notas para uma escola. O segundo código é um
programa que o aluno deve escrever duas notas e o retorno informa a nota mínima
que ele deve tirar na próxima prova para poder passar com nota sete.
*/

const prompt = require('readline-sync');

console.log('\n\tSEGUNDO CÓDIGO\n');

let nota_1 = Number(prompt.question('Informe a primeira nota: '));
let nota_2 = Number(prompt.question('Informe a segunda nota: '));

let nota_minima = nota_1 + nota_2 < 21 ? 21 - (nota_1 + nota_2) : 0;

console.log(`\nNota mínima que o aluno deve tirar para passar: ${nota_minima}`);