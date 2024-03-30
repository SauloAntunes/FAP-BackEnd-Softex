function mostra_dados(lista_objetos)
{
    let resultado = '';

    for (let contador = 0; contador < lista_objetos.length; contador++)
    {
        resultado += 'O ' + lista_objetos[contador].nome + 
        ' possui as habilidades: ' + lista_objetos[contador].habilidades.join(', ') + '\n';
    }

    return resultado;
}

var usuarios = 
[
    {
        nome : 'Douglas',
        habilidades : ['JavaScript', 'ReactJS', 'Redux']
    },
    {
        nome : 'Elton',
        habilidades : ['PHP', 'Ruby on Rails', 'Laravel']
    }
];

let resultado = mostra_dados(usuarios);

console.log(resultado);