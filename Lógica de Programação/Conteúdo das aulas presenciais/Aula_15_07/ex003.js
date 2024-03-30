/*
Faça um programa que peça ao usuário o ano que ele nasceu e mostre a idade 
desse usuário.
*/

let ano_nascimento = Number(prompt('Informe seu ano de nascimento: '));

let idade = 2023 - ano_nascimento;

console.log('Você tem ' + idade + ' anos');