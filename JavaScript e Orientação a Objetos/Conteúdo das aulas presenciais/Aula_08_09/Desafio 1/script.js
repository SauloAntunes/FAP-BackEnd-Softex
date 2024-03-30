const mostrar_resultado = document.querySelector('.resultado')

function API_Correios(){
    fetch('https://viacep.com.br/ws/56327140/json')
    .then(response => response.json())
    .then(dados =>{
        mostrar_resultado.innerHTML = `
                                Bairro: ${dados.bairro}
                                Endereço: ${dados.logradouro}
                                Local: ${dados.localidade}
                                `
    })
    .catch(err => console.log(err))
}

API_Correios()



