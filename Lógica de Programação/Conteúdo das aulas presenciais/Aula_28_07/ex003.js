var carro = 
{
    preco : 1000,
    portas : 4,
    marca : 'Audi',
    mostra_dados : function()
    {
        console.log('Preço: R$' + this.preco);
        console.log('Quantidade de postas: ' + this.portas);
        console.log('Marca do veículo: ' + this.marca);
    }
}

console.log('Antes da mudança:');
carro.mostra_dados();

console.log('\nDepois da mudança:');
carro.preco = 3000;
carro.mostra_dados();