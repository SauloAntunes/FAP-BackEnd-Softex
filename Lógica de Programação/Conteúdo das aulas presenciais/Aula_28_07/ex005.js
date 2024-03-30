var gastos_familiar =
{
    receitas : [],
    despesas : [],
    somatorio : function(lista_valores)
    {
        let somatorio = 0;

        for (let contador = 0; contador < lista_valores.length; contador++)
        {
            somatorio += lista_valores[contador];
        }
        return somatorio
    },
    saldo : function(receitas, despesas)
    {
        if (receitas - despesas > 0)
        {
            console.log('Saldo positivo. Saldo atual: R$' + (receitas - despesas).toFixed(2));
        }else
        {
            console.log('Saldo negativo. Saldo atual: R$' + (receitas - despesas).toFixed(2));
        }
    }
}

gastos_familiar.receitas.push(1, 2, 3, 4, 5);
gastos_familiar.despesas.push(5, 6, 7);

let somatorio_receitas = gastos_familiar.somatorio(gastos_familiar.receitas);
let somatorio_despesas = gastos_familiar.somatorio(gastos_familiar.despesas);

gastos_familiar.saldo(somatorio_receitas, somatorio_despesas);