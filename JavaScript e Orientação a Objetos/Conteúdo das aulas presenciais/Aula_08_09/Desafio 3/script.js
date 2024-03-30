const mostrar_resultado = document.querySelector('.resultado')

function API_Blockchain(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(valor =>{
        mostrar_resultado.innerHTML = `R$${valor.BRL.last}`
    })
    .catch(err => console.log(err))
}


