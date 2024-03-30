const mostrar_resultado = document.querySelector('.resultado')

function API_GitHub(){
    fetch('https://api.github.com/users/origamid/followers')
    .then(response => response.json())
    .then(usuarios =>{
        usuarios.forEach(usuario =>{
            mostrar_resultado.innerHTML += 
                `
                <div class="usuario"><h4>Id: ${usuario.id}</h4>
                <h4>Nome: ${usuario.login}</h4>
                <img src="${usuario.avatar_url}" alt="" class="img_usuario">
                </div>
                `
        })                                    
    })
    .catch(err => console.log(err))
}

API_GitHub()

