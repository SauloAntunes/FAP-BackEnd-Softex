let contador = 0;

const contador_elemento = document.getElementById('contador');

function incrementar()
{
    contador += 1;
    contador_elemento.innerHTML = contador;
}

function decrementar()
{
    contador -= 1;
    contador_elemento.innerHTML = contador;
}