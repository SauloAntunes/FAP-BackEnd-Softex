/*
Vamos criar um array de objetos pessoa com, no mínimo, quatro itens. Cada um deles
será composto por quatro propriedades: nome, idade, profissão e cidade.

Dessa forma, declare os objetos pessoa dentro do array e, depois, desenvolva um
código que utilize for in e for of para que todos os objetos e propriedades sejam
impressos.
*/


let array_pessoas = [
    {
        nome: 'Ana',
        idade: 25,
        profissao: 'Dev Front-End',
        cidade: 'Juazeiro'
    },
    {
        nome: 'Gabi',
        idade: 35,
        profissao: 'Dev Back-End',
        cidade: 'Juazeiro'
    },
    {
        nome: 'João',
        idade: 23,
        profissao: 'Dev Back-End',
        cidade: 'Petrolina'
    },
    {
        nome: 'Pedro',
        idade: 25,
        profissao: 'Dev Front-End',
        cidade: 'Petrolina'
    }
]


for(let objeto_pessoa of array_pessoas){
    console.log(`========================`);
    console.log(`\tPessoa ${array_pessoas.indexOf(objeto_pessoa) + 1}`);
    console.log(`========================`);
    for(let propriedade in objeto_pessoa){  
        console.log(`${propriedade}: ${objeto_pessoa[propriedade]}`);
    }
    console.log(`========================`);
    console.log(`\n`);
}