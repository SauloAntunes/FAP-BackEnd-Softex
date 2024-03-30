const funcionario = document.querySelector('#nome_funcionario');
const resultado = document.querySelector('#resultado_busca');

let funcionarios = ['MIGUEL', 'ARTHUR', 'GAEL', 'HEITOR', 'HELENA', 'ALINE', 'THEO', 'LAURA', 'DAVI', 'GABRIEL'];

function buscar_funcionario(){
    const nome = funcionario.value;

    if(funcionarios.includes(nome.toUpperCase())){
        resultado.innerHTML = `${nome.toUpperCase()}`;
    }else{
        resultado.textContent = `Funcionário não encontrado!`;
    }
}