/*
Utilizando a linguagem JavaScript, crie uma situação na qual os números precisam
ser informados pelo usuário. Além disso, deve ocorrer uma exceção dentro do
código. Utilize os métodos try(), catch() e finally() para realizar a captura
e o tratamento dessa exceção.
*/


const prompt = require('readline-sync');


let numero_1 = Number(prompt.question(`Informe o primeiro número: `));
let numero_2 = Number(prompt.question(`Informe o segundo número.: `));

try {
    if(numero_2 == 0){
        throw new ERROR
    }
    console.log(`\n${numero_1} / ${numero_2} = ${numero_1 / numero_2}`);
} catch (error) {
    console.log(`\nNão é possível realizar uma divisão por zero!`);
} finally {
    console.log(`\nPrograma finalizado!`);
}