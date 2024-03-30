/*
Crie uma classe chamada Pessoa que deve receber três parâmetros no 
método construtor, nome, idade e sexo. Crie um método chamado 
apresentar e mostre o nome, idade e sexo da pessoa.
*/

class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    apresentar(){
        console.log(`Nome: ${this.nome} - Idade: ${this.idade} - Sexo: ${this.sexo}`);
    }
}

let pessoa_1 = new Pessoa('João', 30, 'M');
let pessoa_2 = new Pessoa('Maria', 35, 'F');

pessoa_1.apresentar();
pessoa_2.apresentar();