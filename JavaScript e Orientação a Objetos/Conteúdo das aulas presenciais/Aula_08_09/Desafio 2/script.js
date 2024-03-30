const mostrar_resultado = document.querySelector('.resultado')

function API_Chucknorris(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(msg =>{
        mostrar_resultado.innerHTML = `${msg.value}`
    })
    .catch(err => console.log(err))
}


