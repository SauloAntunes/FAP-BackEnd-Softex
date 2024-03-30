/*
Com os conceitos aprendidos, crie um programa de calculadora que:

- receba dois valores, que devem ser salvos em vaiáveis;
- o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos
aritméticos;
- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma;
*/

const prompt = require('readline-sync');

console.log('\n\tCalculadora\n');

let numero_1 = Number(prompt.question('Informe o primeiro número: '));
let numero_2 = Number(prompt.question('Informe o segundo número: '));

console.log('\n[+] - Soma\n[-] - Subtração\n[*] - Multiplicação\n[/] - Divisão\n[**] - Exponenciação\n');
let operacao = prompt.question('Informe a operação desejada: ');

switch(operacao){
    case '+':
        console.log(`\n${numero_1} + ${numero_2} = ${numero_1 + numero_2}`);
        break;
    case '-':
        console.log(`\n${numero_1} - ${numero_2} = ${numero_1 - numero_2}`);
        break;
    case '*':
        console.log(`\n${numero_1} * ${numero_2} = ${numero_1 * numero_2}`);
        break;
    case '/':
        console.log(`\n${numero_1} / ${numero_2} = ${numero_1 / numero_2}`);
        console.log(`Sobra da divisão: ${numero_1 % numero_2}`);
        break;
    case '**':
        console.log(`\n${numero_1} ** ${numero_2} = ${numero_1 ** numero_2}`);
        break;
    default:
        console.log(`\nOperador inválido!`);
}