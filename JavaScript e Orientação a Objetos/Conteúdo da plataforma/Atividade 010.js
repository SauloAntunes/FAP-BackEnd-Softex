/*
Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada "Function" e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um
programa de calculadora.
*/

const prompt = require('readline-sync');


function menu(){
    console.log('[1] - Soma\n[2] - Subtração\n[3] - Multiplicação\n[4] - Divisão\n');
}

function operacao(operador, numero_1, numero_2){
    let resultado;
    switch (operador) {
        case 1:
            resultado = numero_1 + numero_2;
            break;
        case 2:
            resultado = numero_1 - numero_2;
            break;
        case 3:
            resultado = numero_1 * numero_2;
            break;
        case 4:
            resultado = numero_1 / numero_2;
            break;
        default:
            console.log('Operador inválido!');
    }
    
    return resultado;
}


menu();

let opcao_operacao = Number(prompt.question('Digite a opção desejada: '));
let numero_1 = Number(prompt.question('Informe o primeiro número: '));
let numero_2 = Number(prompt.question('Informe o segundo número: '));

const resultado = ()=>`Resultado da operação: ${operacao(opcao_operacao, numero_1, numero_2)}`

console.log(resultado());