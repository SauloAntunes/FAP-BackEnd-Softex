const numero_1 = document.querySelector("#n1");
const numero_2 = document.querySelector("#n2");
const soma = document.querySelector("#resultado");


function somar(){
    let total = Number(numero_1.value) + Number(numero_2.value);
    soma.innerHTML = total;
}