var pessoa =
{
    nome : 'Saulo',
    sobrenome : 'Carvalho',
    mostra_dados : function()
    {
        console.log('Seu nome é ' + this.nome);
        console.log('Seu sobrenome é ' + this.sobrenome);
    }
}

pessoa.mostra_dados();