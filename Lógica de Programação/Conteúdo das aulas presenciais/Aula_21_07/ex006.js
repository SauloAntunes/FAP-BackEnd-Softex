function cuboNumero(numero)
{
    return Math.pow(numero, 3);
}

let numero = Number(prompt('Informe um número: '));

let resultado = cuboNumero(numero);

console.log('O cubo do número ' + numero + ' é ' + resultado);