let elementos_A = [];

for (let contador = 0; contador < 3; contador++)
{
    elementos_A.push(Number(prompt(`Informe o ${contador + 1}º valor: `)));
}

let elementos_B = elementos_A.map(elemento =>{
    return elementos_A.indexOf(elemento) % 2 == 0 ? elemento * 5 : elemento + 5;
})

console.log(elementos_A);
console.log(elementos_B);