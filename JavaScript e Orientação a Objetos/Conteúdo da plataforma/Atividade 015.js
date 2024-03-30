/*
Com base no que estudamos, escolha dois objetos materiais e dois abstratos. 
Em seguida, faça uma lista com, pelo menos, três atributos e três métodos
para cada tipo de objeto. Para finalizar, demonstre esses objetos em
JavaScript e exemplifique as suas características e ações.
*/


class Cachorro{
    nome;
    idade;
    raca;

    latir(){
        console.log(`O ${this.nome} está latindo!`);
    }
    correr(){
        console.log(`O ${this.nome} está correndo!`);
    }
    comer(){
        console.log(`O ${this.nome} está comendo!`);
    }
}


class Carro{
    modelo;
    fabricante;
    ano;

    acelerar(){
        console.log(`O ${this.modelo} está acelerando!`);
    }
    frear(){
        console.log(`O ${this.modelo} está freando!`);
    }
    buzinar(){
        console.log(`O ${this.modelo} está buzinando!`);
    }
}


class ContaBancaria{
    numero_conta;
    titular;
    saldo;

    sacar(valor){
        if(valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Saque efetuado!\n`);
        }else{
            console.log(`Não foi possível efetuar o saque!\n`);
        }
    }
    depositar(valor){
        this.saldo += valor;
        console.log(`Depósito efetuado!\n`);
    }
    dados_conta(){
        console.log(`Número da Conta: ${this.numero_conta}`);
        console.log(`Titular........: ${this.titular}`);
        console.log(`Saldo..........: R$${this.saldo}\n`);
    }
}


class Cliente{
    cpf;
    nome;
    endereco;

    comprar(){
        console.log(`O ${this.nome} fez uma compra!\n`);
    }
    pagar(){
        console.log(`O ${this.nome} fez um pagamento!\n`);
    }
    dados_cliente(){
        console.log(`CPF.....: ${this.cpf}`);
        console.log(`Nome....: ${this.nome}`);
        console.log(`Endereço: ${this.endereco}\n`);
    }
}


let cachorro = new Cachorro();
let carro = new Carro();
let conta = new ContaBancaria();
let cliente = new Cliente();


cachorro.nome = 'Bob';
cachorro.idade = 3;
cachorro.raca = 'Vira-lata';
cachorro.latir();
cachorro.correr();
cachorro.comer();

console.log('\n');

carro.modelo = 'Gol';
carro.fabricante = 'Volkswagen';
carro.ano = 2013;
carro.acelerar();
carro.frear();
carro.buzinar();

console.log('\n');

conta.numero_conta = 123;
conta.titular = 'Bob';
conta.saldo = 5500;
conta.dados_conta();
conta.sacar(1000);
conta.dados_conta();
conta.depositar(5500);
conta.dados_conta();

console.log('\n');

cliente.cpf = 12345678910;
cliente.nome = 'Bob';
cliente.endereco = 'Rua 1';
cliente.comprar();
cliente.pagar();
cliente.dados_cliente();