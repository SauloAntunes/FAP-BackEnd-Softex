/*
Crie uma classe chamada calculadora. Receba dois números como 
parâmetros no construtor. Crie quatro métodos para calcular as quatro 
operações matemáticas: Adição, subtração, divisão e multiplicação. 
Quando criado o objeto é mandado para o construtor 2 números e quando 
chamarmos os métodos mostra o resultado
*/

class Calculadora{
    constructor(numero_1, numero_2){
        this.numero_1 = numero_1;
        this.numero_2 = numero_2;
    }

    adicao(){
        console.log(`${this.numero_1} + ${this.numero_2} = ${this.numero_1 + this.numero_2}`);
    }

    subtracao(){
        console.log(`${this.numero_1} - ${this.numero_2} = ${this.numero_1 - this.numero_2}`);
    }

    divisao(){
        console.log(`${this.numero_1} / ${this.numero_2} = ${this.numero_1 / this.numero_2}`);
    }

    multiplicacao(){
        console.log(`${this.numero_1} * ${this.numero_2} = ${this.numero_1 * this.numero_2}`);
    }
}

let calculos = new Calculadora(6, 2);

calculos.adicao();
calculos.subtracao();
calculos.divisao();
calculos.multiplicacao();