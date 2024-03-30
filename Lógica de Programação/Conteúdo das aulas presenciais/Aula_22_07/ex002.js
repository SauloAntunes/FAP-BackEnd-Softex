function investimento(capital_inicial, tempo_meses, taxa_juros_mensal)
{
    return (capital_inicial * Math.pow((1 + taxa_juros_mensal / 100), tempo_meses));
}

let capital_inicial = Number(prompt('Informe o capital inicial: R$'));
let tempo_meses = Number(prompt('Informe do investimento, em meses: '));
let taxa_juros = Number(prompt('Informe a taxa de juros mensal, em percentual: %'));

let montante = investimento(capital_inicial, tempo_meses, taxa_juros);

console.log('Montante: R$' + montante.toFixed(2));