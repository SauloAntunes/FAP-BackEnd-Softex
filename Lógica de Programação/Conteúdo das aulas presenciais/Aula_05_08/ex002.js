let elementos_A = [];

for (let contador = 0; contador < 5; contador++)
{
    elementos_A.push(Number(prompt(`Informe o ${contador + 1}º valor: `)));
}

let somatorio_impares = elementos_A.reduce(function (somatorio, elemento){
    return elemento % 2 == 1 ? somatorio += elemento : somatorio += 0;
}, 0);

console.log('Elementos A: ' + elementos_A);
console.log('Somatório ímpares: ' + somatorio_impares);