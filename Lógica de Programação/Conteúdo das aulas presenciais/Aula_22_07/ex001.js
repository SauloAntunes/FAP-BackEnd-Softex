function numeroInvertido(numero)
{
    let numeroInvertido = '';
    for (let contador = numero.length - 1; contador >= 0; contador--)
    {
        numeroInvertido += numero[contador];
    }
    numeroInvertido = Number(numeroInvertido);
    return numeroInvertido;
}

let numero = prompt('Informe um número: ');

let resultado = numeroInvertido(numero);

console.log('\nO número ' + numero + ' invertido é ' + resultado);

console.log('Tipo da variável resultado: ' + typeof(resultado));