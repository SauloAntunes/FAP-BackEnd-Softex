const estudantes = 
[
    {nome : 'José', nota : 5.7},
    {nome : 'Maria', nota : 4.8},
    {nome : 'Paula', nota : 7.5},
    {nome : 'Eustáquio', nota : 6.7}
];

let somatorio_notas = estudantes.reduce(function (somatorio, estudante){
    return somatorio += estudante.nota;
}, 0) ;

console.log(`Média da turma: ${somatorio_notas / estudantes.length}`);