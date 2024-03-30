const prompt = require("readline-sync");


class Strategy{
    execute(numero_1, numero_2){}
}


class Soma extends Strategy{
    execute(numero_1, numero_2){
        return numero_1 + numero_2;
    }
}


class Subtracao extends Strategy{
    execute(numero_1, numero_2){
        return numero_1 - numero_2;
    }
}


class Multiplicacao extends Strategy{
    execute(numero_1, numero_2){
        return numero_1 * numero_2;
    }
}


let numero_1 = parseInt(prompt.question('Informe o primeiro número: '));
let numero_2 = parseInt(prompt.question('Informe o segundo número: '));
let operacao = prompt.question(`\n[+] - Soma\n[-] - Subtração\n[*] - Multiplicação\n
Informe a operação desejada: `);
let strategy;

switch (operacao) {
    case '+':
        strategy = new Soma;
        break;
    case '-':
        strategy = new Subtracao;
        break;
    case '*':
        strategy = new Multiplicacao;
        break;
    default:
        console.log('\nERRO! Operação inválida.\n');
}

if(strategy){
    let resultado = strategy.execute(numero_1, numero_2);
    console.log(`\n${numero_1} ${operacao} ${numero_2} = ${resultado}`);
}