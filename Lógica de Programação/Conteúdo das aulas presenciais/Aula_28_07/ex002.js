var pessoa =
{
    nome : 'Saulo',
    sobrenome : ' Carvalho',
    mostra_dados : function()
    {
        console.log('Seu nome completo é ' + this.nome + this.sobrenome);
    }
}

pessoa.mostra_dados(); 