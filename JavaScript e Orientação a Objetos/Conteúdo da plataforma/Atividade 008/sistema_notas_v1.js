/*
Crie dois códigos de sistema de notas para uma escola. O primeiro código deve
ser um programa que informa se o aluno reprovou, ou não, com base nas três 
notas que ele adicionou ao programa. Utilize, no mínimo, um operador de 
atribuição e um ternário.
*/

const prompt = require('readline-sync');

console.log('\n\tPRIMEIRO CÓDIGO\n');

let nota_1 = Number(prompt.question('Informe a primeira nota: '));
let nota_2 = Number(prompt.question('Informe a segunda nota: '));
let nota_3 = Number(prompt.question('Informe a terceira nota: '));

let media = (nota_1 + nota_2 + nota_3) / 3;

let situacao = media >= 7 ? 'APROVADO' : 'REPROVADO';

console.log(`\nSituação do aluno: ${situacao}`);
