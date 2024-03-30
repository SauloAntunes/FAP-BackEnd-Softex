/*
Faça um script que leia um número e exiba o dia correspondente da semana. 
(1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor 
inválido.
*/

let dia_semana = Number(prompt('Informe um número inteiro: '));

if(dia_semana == 1)
{
    console.log('1 - Domingo');
}else
{
    if(dia_semana == 2)
    {
        console.log('2 - Segunda');
    }else
    {
        if(dia_semana == 3)
        {
            console.log('3 - Terça');
        }else
        {
            if(dia_semana == 4)
            {
                console.log('4 - Quarta');
            }else
            {
                if(dia_semana == 5)
                {
                    console.log('5 - Quinta');
                }else
                {
                    if(dia_semana == 6)
                    {
                        console.log('6 - Sexta');
                    }else
                    {
                        if(dia_semana == 7)
                        {
                            console.log('7 - Sábado');
                        }else
                        {
                            console.log('Opção inválida!');
                        }
                    }
                }
            }
        }
    }
}