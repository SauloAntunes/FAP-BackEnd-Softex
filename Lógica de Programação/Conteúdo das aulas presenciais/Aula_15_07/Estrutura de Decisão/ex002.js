/*
Faça um programa e solicite três números inteiros ao usuário e mostre o 
maior deles.
*/

let num1 = Number(prompt('Informe o primeiro número: '));

let maior = num1;

let num2 = Number(prompt('Informe o segundo número: '));

if(num2 > maior)
{
    maior = num2;
}

let num3 = Number(prompt('Informe o terceiro número: '));

if(num3 > maior)
{
    maior = num3;
}

console.log('Entre ' + num1 + ', ' +  num2 + ' e ' + num3 +  '. O maior número é: ' + maior);