const nome_investidor = document.querySelector('#nome_investidor');
const valor_mensalidade = document.querySelector('#valor_mensalidade');
const tempo_contribuicao = document.querySelector('#tempo_contribuicao');
const resultado_investimento = document.querySelector('#resultado_investimento');


function simular(){
    let nome = nome_investidor.value;
    let mensalidade = Number(valor_mensalidade.value);
    let tempo_contribuicao_meses = 12 * Number(tempo_contribuicao.value);
    const taxa_juros = 0.517 / 100;

    let juros_compostos = mensalidade * 
    (Math.pow((1 + taxa_juros), tempo_contribuicao_meses) - 1) / taxa_juros;

    resultado_investimento.innerHTML = `Olá ${nome.toUpperCase()}, juntando 
    R$${mensalidade.toFixed(2).replace('.', ',')} todo mês, você terá 
    R$${juros_compostos.toFixed(2).replace('.', ',')}
    em ${tempo_contribuicao_meses / 12} anos.`;
}