var dados_bancarios_usuario =
{
    nome_cliente : 'Saulo',
    CPF_cliente : 123,
    numero_conta : 456,
    nome_agencia : 'ABC',
    numero_agencia : 789,
    saldo : 123,
    mostra_dados : function()
    {
        console.log('\t\tDados Bancários\n');
        console.log('Nome.............: ' + this.nome_cliente);
        console.log('CPF..............: ' + this.CPF_cliente);
        console.log('Número da Conta..: ' + this.numero_conta);
        console.log('Nome da Agência..: ' + this.nome_agencia);
        console.log('Número da Agência: ' + this.numero_agencia);
        console.log('Saldo............: R$' + this.saldo);
    }
}

dados_bancarios_usuario.mostra_dados();