/*
Faça um programa que leia 2 números, some-os e exiba uma mensagem com 
o resultado apenas se o resultado for maior que 100.
*/

let numero1 = Number(prompt('Informe o primeiro número: '));
let numero2 = Number(prompt('Informe o segundo número: '));

let soma = numero1 + numero2;

if(soma > 100)
{
    console.log('A soma entre ' + numero1 + ' + ' + numero2 + ' = ' + soma + '. Maior que 100.');
    
}