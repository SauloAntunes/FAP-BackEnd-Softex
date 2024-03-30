let cidades = ['Juazeiro', 'Petrolina', 'Sento-Sé', 'Salvador', 'Vitória da Conquista'];

for (let contador = 0; contador < cidades.length; contador++)
{
    console.log((contador + 1) + 'ª cidade: ' + cidades[contador]);
}

cidades.push('Barreiras');

console.log('Novo Array com a adição de uma nova cidade utilizando o método Push');

for (let contador = 0; contador < cidades.length; contador++)
{
    console.log((contador + 1) + 'ª cidade: ' + cidades[contador]);
}