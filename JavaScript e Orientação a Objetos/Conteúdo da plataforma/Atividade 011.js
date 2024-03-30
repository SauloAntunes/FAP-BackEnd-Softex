/*
Crie um código com um objeto chamado "Banco". Ele deverá ter propriedades que
incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar
saldo, depósito, saque e número da conta.

Observações:

- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no
saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo
final do objeto;
- o número da conta deve retornar o número da conta.
*/


let Banco = {
    conta: 123,
    saldo: 100,
    tipo_conta: 'Conta Corrente',
    agencia: 456,
    buscar_saldo: function(){
        return this.saldo;
    },
    deposito: function(valor_deposito){
        this.saldo += valor_deposito;
        console.log('Depósito efetuado!');
    },
    saque: function(valor_saque){
        if(this.saldo >= valor_saque){
            this.saldo -= valor_saque;
            console.log('Saque efetuado!');
        }else{
            console.log('\nNão foi possível efetuar o saque!');
            console.log('O valor do saque é maior do que o saldo atual.\n');
        }
    },
    numero_conta: function(){
        return this.conta;
    }
};


console.log(`Saldo atual: R$${Banco.buscar_saldo()}\n`);

console.log(`Depositando R$50`);
Banco.deposito(50);
console.log(`Saldo atual: R$${Banco.buscar_saldo()}\n`);

console.log(`Sacando R$200`);
Banco.saque(200);
console.log(`Saldo atual: R$${Banco.buscar_saldo()}\n`);

console.log(`Sacando R$100`);
Banco.saque(100);
console.log(`Saldo atual: R$${Banco.buscar_saldo()}\n`);

console.log(`Número da conta: ${Banco.numero_conta()}`);