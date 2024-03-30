let array_A = [];
let array_B = [];

for (let contador = 0; contador < 20; contador++)
{
    array_A.push(Number(prompt(`Informe o ${contador + 1} valor: `)));
}

console.log(array_A);

array_B = array_A.reverse();

console.log(array_B);