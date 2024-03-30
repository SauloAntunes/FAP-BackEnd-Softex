function areaTriangulo(base, altura){return (base * altura / 2);}

let base = Number(prompt('Informe a base do triângulo: '));
let altura = Number(prompt('Informe a altura do triângulo: '));

let resultado = areaTriangulo(base, altura);

console.log('Base: ' + base);
console.log('Altura: ' + altura);
console.log('Área: ' + resultado);