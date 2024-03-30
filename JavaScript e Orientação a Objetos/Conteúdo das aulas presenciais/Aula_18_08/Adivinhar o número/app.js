const tentativa = document.querySelector("#numero");
const resultado = document.querySelector("#resultado");

let quantidade_tentativas = 0;

function adivinhar_numero(){
    let numero_correto = 30;

    if(Number(tentativa.value) > numero_correto){
        quantidade_tentativas += 1;
        window.alert('O número informado é maior!');
    }else if(Number(tentativa.value) < numero_correto){
        quantidade_tentativas += 1;
        window.alert('O número informado é menor!');
    }else{
        quantidade_tentativas += 1;
        window.alert(`Você acertou! Foram ${quantidade_tentativas} tentativas.`);
        quantidade_tentativas = 0;
    }
}