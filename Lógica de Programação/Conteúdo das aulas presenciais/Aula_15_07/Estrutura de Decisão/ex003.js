/*
Faça um script que recebe o salário de um colaborador e o reajuste 
segundo o seguinte critério, baseado no salário atual:

salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5% 

Após o aumento ser realizado, informe na tela:

o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento.
*/

let salario_reajuste = 0;
let percentual = '';
let aumento = 0;

let salario  = Number(prompt('Informe seu salário: R$'));

if(salario <= 280)
{
    salario_reajuste = salario + (salario * 20 / 100);
    percentual = '20%';
    aumento = salario * 20 / 100;
}else
{
    if(salario <= 700)
    {
        salario_reajuste = salario + (salario * 15 / 100);
        percentual = '15%';
        aumento = salario * 15 / 100;
    }else
    {
        if(salario <= 1500)
        {
            salario_reajuste = salario + (salario * 10 / 100);
            percentual = '10%';
            aumento = salario * 10 / 100;
        }else
        {
            salario_reajuste = salario + (salario * 5 / 100);
            percentual = '5%';
            aumento = salario * 5 / 100;
        }
    }
}

console.log('\n\nSalário antes do reajuste.....: R$' + salario.toFixed(2));
console.log('Percentual de aumento aplicado: ' + percentual);
console.log('Valor do aumento..............: R$' + aumento.toFixed(2));
console.log('Novo salário..................: R$' + salario_reajuste.toFixed(2));