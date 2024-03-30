/*
Faça um programa que leia do usuário uma temperatura em Fahrenheit, 
converta-a para graus Celsius e escreva o novo valor na tela. A fórmula de 
conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. 

Exemplo: 100 Fahrenheit = 37,77 Celsius.
*/

let temperatura_Fahrenheit = Number(prompt('Informe a temperatura em Fahrenheit: '));

temperatura_Celsius = ((temperatura_Fahrenheit - 32) * 5) / 9;

console.log(temperatura_Fahrenheit + 'ºF equivale a ' + temperatura_Celsius.toFixed(2) + ' ºC');