var cachorro = 
{
    raca : 'Labrador',
    cor : 'Preto',
    idade : 10,
    latir : function(viu_homem)
    {
        if (viu_homem)
        {
            console.log('Cachorro latindo!');
        }else
        {
            console.log('Cachorro não está latindo!');
        }
    }
}

console.log('Raça do cachorro.: ' + cachorro.raca);
console.log('Cor do cachorro..: ' + cachorro.cor);
console.log('idade do cachorro: ' + cachorro.idade);
cachorro.latir(false);