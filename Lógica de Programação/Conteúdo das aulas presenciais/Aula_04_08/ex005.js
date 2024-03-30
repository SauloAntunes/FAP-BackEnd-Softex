const empresas = [
    {nome : 'Samsung', valorDeMercado : 50, CEO : 'Kim Hyun Suk', anoDeCriacao : 1938},
    {nome : 'Microsoft', valorDeMercado : 415, CEO : 'Satya Nadella', anoDeCriacao : 1975},
    {nome : 'Intel', valorDeMercado : 117, CEO : 'Brian Krzanich', anoDeCriacao : 1968},
    {nome : 'Facebook', valorDeMercado : 383, CEO : 'Mark Zuckerberg', anoDeCriacao : 2004},
    {nome : 'Spotify', valorDeMercado : 30, CEO : 'Daniel Ek', anoDeCriacao : 2006},
    {nome : 'Apple', valorDeMercado : 845, CEO : 'Tim Cook', anoDeCriacao : 1976}
];

const empresas_depois_2000 = empresas.filter(empresa =>{
    return empresa.anoDeCriacao > 2000;
})

empresas_depois_2000.forEach(empresa =>{
    console.log('Empresas criadas depois dos anos 2000: ' + empresa.nome);
})

console.log('\n');

empresas.forEach(empresa => {
    console.log('Nome da empresa: ' + empresa.nome + ' - CEO: ' + empresa.CEO);
})

let somatorio_valor_mercado = empresas.reduce(function (resultado, valor_mercado){
    return resultado + valor_mercado.valorDeMercado;
}, 0);

console.log('\nSomatório do valor de mercado das empresas: R$' + somatorio_valor_mercado.toFixed(2));