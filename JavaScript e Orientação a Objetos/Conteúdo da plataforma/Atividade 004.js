let nome; // tipo string
let salario; // tipo number
let idade; // tipo number
let possui_diploma; // tipo boolean

nome = 'Maria';
salario = 2500;
idade = 25;
possui_diploma = true;

console.log(`Nome..........: ${nome}`);
console.log(`Salário.......: R$${salario.toFixed(2)}`);
console.log(`Idade.........: ${idade}`);
console.log(`Possui diploma? ${possui_diploma}`);

nome = 'João';
salario = 1000;
idade = 18;
possui_diploma = false;

console.log(`\nNome..........: ${nome}`);
console.log(`Salário.......: R$${salario.toFixed(2)}`);
console.log(`Idade.........: ${idade}`);
console.log(`Possui diploma? ${possui_diploma}`);