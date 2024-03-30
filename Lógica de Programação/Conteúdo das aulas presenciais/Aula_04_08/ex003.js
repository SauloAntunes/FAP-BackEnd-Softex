const numeros = [5, 7, 9, 10];

const numeros_quadrado = numeros.map(numero =>{
    return Math.pow(numero, 2);
})

console.log('Array original..................: ' + numeros.join(', '));
console.log('Array com os números ao quadrado: ' + numeros_quadrado.join(', '));