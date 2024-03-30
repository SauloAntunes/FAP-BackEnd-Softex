/* 
A atividade que faremos é a da "calculadora de média". Para isso, você deve criar
um programa JavaScript que calcule a média de três notas inseridas pelo usuário
e exiba o resultado no console.

Primeiro, solicite que o usuário insira três notas (entre 0 e 10) usando a função
prompt(). Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1,
nota2 e nota3, com o tipo de dado Number. Depois, some-as e divida por três.
O resultado deste cálculo será o valor da média, que deve ser armazenado em uma
variável chamada média. Por fim, exiba esse valor no console usando a função
console.log().
*/

const prompt = require("readline-sync");


console.log('Informe três notas entre 0 e 10\n');

let nota_1 = Number(prompt.question('Informe a primeira nota: '));
let nota_2 = Number(prompt.question('Informe a segunda nota: '));
let nota_3 = Number(prompt.question('Informe a terceira nota: '));

let media = (nota_1 + nota_2 + nota_3) / 3;

console.log(`\nMédia: ${media.toFixed(2)}`);